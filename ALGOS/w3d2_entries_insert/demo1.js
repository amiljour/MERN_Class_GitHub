// recreate Object.entries

const obj1 = {
    food: "pizza",
    calories: 9001
};

// console.log(obj1.food);

const obj2 = {
    firstName: "bob",
    lastName: "Bobbers",
    power: 9001
};

Object.setPrototypeOf(obj1, obj2);

// looping over objects
// looping over an array is a for of
// looping over an object is a for in

for (let someKey in obj1) {
    console.log("⭐", someKey, obj1[someKey]);
}

// returns an array of keys
const keyArray = Object.keys(obj2);
// console.log(keyArray);

const valueArray = Object.values(obj2);
// console.log(valueArray);

// returns a 2d array of the key-value pairs
const entries = Object.entries(obj1);
console.log(entries);





