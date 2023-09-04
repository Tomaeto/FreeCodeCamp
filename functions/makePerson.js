//Program for writing a Person object with the given functions
const Person = function(first, last) {
  let firstName = first;
  let lastName = last;
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
  }
};
