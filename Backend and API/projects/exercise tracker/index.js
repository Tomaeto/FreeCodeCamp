const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
let mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI);

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }));

const Schema = mongoose.Schema;

//Schema for an entry into the database
const userSchema = new Schema({
  username: { type: String, required: true },
  count: { type: Number, default: 0 },
  log: [{
    description: { type: String },
    duration: { type: Number },
    date: { type: Date }
  }]
});
let User = mongoose.model("User", userSchema);


//Route for posting new users to database
//If a user with that name already exists, returns existing user
app.post("/api/users", async (req, res) => {
  let name = req.body.username;
  if (name === '') return res.json({ error: "username is required" });
  let existing = await User.findOne({ username: name });
  if (existing) return res.json({ existing });

  let user = await User.create({
    username: name
  })
  res.json({ username: name, _id: user.id });
})

//Route for getting a json object of all users in database
//Each entry only contains username and id
app.get("/api/users", async (req, res) => {
  const all = await User.find({});
  const users = [];
  for (let user in all) {
    users.push({ username: all[user].username, _id: all[user].id });
  }
  res.json(users);
});

//Route for posting a new exercise into a user's log
//Requires both description and duration params
//If a date is provided, uses that date, otherwise uses current date
//Returns json object w/ username, description, duration, date, and id
app.post("/api/users/:_id/exercises", async (req, res) => {
  const desc = req.body.description;
  const dur = parseInt(req.body.duration);
  let exerDate = new Date();
  if (desc == undefined || dur == undefined) return res.json({ error: "description and duration required" });
  let logEntry = { description: desc, duration: dur, date: new Date() };
  if (req.body.date) {
    logEntry.date = new Date(req.body.date);
  }
  const data = await User.findByIdAndUpdate(req.params._id, { $inc: { count: 1 }, $push: { log: logEntry } });
  const result = { username: data.username, description: desc, duration: dur, date: logEntry.date.toDateString(), _id: data.id }
  res.json(result);
});

//Route for getting the exercise logs of a user
//Optional from, to, and limit parameters
//from and to are date range parameters, limit gives maximum number of returned log entries
//Database query is converted to JSON via lean() for editing log entries
app.get("/api/users/:_id/logs", async (req, res) => {
  let user = await User.findById(req.params._id).lean();
  let from = new Date(req.query.from);
  let to = new Date(req.query.to);
  let limit = parseInt(req.query.limit);

  //If either a from or to param are provided, get user document with given date range for log entries
  if (req.query.from || req.query.to) {
    if (from == "Invalid Date") from = new Date();
    if (to == "Invalid Date") to = new Date();
    user = await User.findOne({ _id: req.params._id, 'log.date': { $gte: from, $lte: to } }).lean();
  }

  //If a limit is given, shrink log array to given size limit
  if (req.query.limit) {
    user.log = user.log.slice(0, limit);
  }

  //Converting each date entry into a date string
  for (let i in user.log) {
    user.log[i].date = user.log[i].date.toDateString();
  }
  res.json(user);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
