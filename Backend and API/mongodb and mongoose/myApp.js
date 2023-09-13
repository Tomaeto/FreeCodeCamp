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
  let person = new Person({name: "John", age:20, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
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

const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({favoriteFoods: food});
    done(null, data);
  }
  catch(err) {
    console.log(err);
  }
};

const findPersonById = async (personId, done) => {
  try {
    const data = await Person.findById(personId);
    done(null, data);
  }
  catch (err) {
    console.log(err);
  }
};

const findEditThenSave = async (personId, done) => {
  const foodToAdd = "hamburger";
  try {
    let person = await Person.findById(personId);
    person.favoriteFoods.push(foodToAdd);
    let data = await person.save();
    done(null, data);
  }
  catch (err) {
    console.log(err);
  }
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  try {
    const data = await Person.findOneAndUpdate({name: personName}, {age: ageToSet}, { new: true });
    done(null, data);
  }
  catch (err) {
    console.log(err);
  }
};

const removeById = async (personId, done) => {
  try {
    const data = await Person.findByIdAndRemove(personId);
    done(null, data);
  }
  catch (err) {
    console.log(err);
  }
};

const removeManyPeople = async (done) => {
  const nameToRemove = "Mary";
  try {
    const data = Person.removeMany({name: nameToRemove});
    done(null, data);
  }
  catch (err) {
    console.log(err);
  }
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch}).sort({name: 1}).limit(2).select({age: 0}).exec(function(err, data) {
    if (err) return console.log(err);
    done(null, data);
  })
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
