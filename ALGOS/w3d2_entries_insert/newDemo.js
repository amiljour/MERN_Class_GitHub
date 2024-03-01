const obj1 = {
    food: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    power: 9001,
};

// linking objects together
obj1.__proto__ = obj2;

// looping over an obj
for(let someKey in obj1) {
    console.log(someKey, obj1[someKey])
}

// extract keys of an obj
// returns an ARRAY of the keys
const keyArray = Object.keys(obj1)

// return an ARRAY of the values
const valuesArray = Object.values(obj2)
// console.log(valuesArray)

// returns a 2d array of K:V pairs
const entriesArray = Object.entries(obj1)
console.log(entriesArray)