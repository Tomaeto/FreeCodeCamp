require('dotenv').config();
let express = require('express');
let app = express();
const dns = require('dns');
let bodyParser = require('body-parser');
dns.setDefaultResultOrder('ipv4first');


app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
    var str = req.method + " " + req.path + " - " + req.ip;
    console.log(str);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/name', function(req, res) {
    let {first: firstname, last: lastname} = req.query;
    res.json({name: `${firstname} ${lastname}`})
});

app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE == 'uppercase')
    res.json({"message": "HELLO JSON"});
    else   
        res.json({"message": "Hello json"});
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
    }, function(req, res) {
        res.json({time: req.time});
});

app.get('/:word/echo', function(req, res) {
    let word = req.params.word;
    res.json({echo: word});
});
































 module.exports = app;
