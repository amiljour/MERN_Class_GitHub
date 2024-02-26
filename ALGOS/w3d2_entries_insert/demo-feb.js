// Objects

const obj1 = {
    food: "pizza",
    calories: 9001
};


const obj2 = {
    firstName: "bob",
    lastName: "Bobbers",
    power: 9001
};

Object.setPrototypeOf(obj1, obj2);

// for (let key in obj1) {
//     console.log(key, obj1[key]);
// }
// returns an array of keys
const keyArray = Object.keys(obj2);
// console.log('keyArray: ', keyArray);

// returns an array of the values of an object
const valueArray = Object.values(obj2);
// console.log('valueArray: ', valueArray);

// returns a 2d array of the key-value pairs
const entries = Object.entries(obj1);
console.log('entries: ', entries);


// console.log(obj1.food);
// console.log(obj1["food"]);

// looping over an array is a for of
// looping over an object is a for in

// const myAnimals = ["elephant", "zebra", "frog", "eagle"];
// for (let elem of myAnimals) {
//     console.log(elem);
// }