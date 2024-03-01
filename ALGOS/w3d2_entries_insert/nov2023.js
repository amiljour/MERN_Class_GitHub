// recreate Object.entries

const obj1 = {
    food: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    power: 9001,
};

// linking objects
// obj1.__proto__ = obj2;

Object.setPrototypeOf(obj1, obj2);

for (let someKey in obj1) {
    console.log("⭐", someKey, obj1[someKey]);
}

// returns an array of keys
const keyArray = Object.keys(obj2);
// console.log(keyArray)

const valuesArray = Object.values(obj2);
// console.log(valuesArray)

console.log("-----------");
const entries = Object.entries(obj1);
console.log(entries);