require('dotenv').config();
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number},
  favoriteFoods: {type: [String]}
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = async (done) =>  {
  let person = new Person({name: "John", age:20, favoriteFoods: ["chicken", "beef"]});
  try {
  const data = await person.save();
  done(null, data)
  }
  catch (err) {
    console.error(err)
  }

};


const createManyPeople = (arrayOfPeople, done) => {
  arrayOfPeople = [{name: "Jerry", age: 25, favoriteFoods:["pineapple"]},
  {name: "Anna", age: 23, favoriteFoods: ["steak", "lemon"]}];
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  })

};

const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({name: personName});
    done(null, data);
  }
  catch (err) {
    console.error(err);
  }
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
