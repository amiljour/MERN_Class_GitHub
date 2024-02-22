// review looping over arrays and objects
//               0         1         2          3
const animals = ["lion", "zebra", "elephant", "giraffe"];

for (let animal of animals) {
    console.log(animal);
}

const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: {
        loud: true,
        sound: "woof"
    },
};

for (let someKey in doggo) {
    console.log(someKey);
}

const doggoKeysArray = Object.keys(doggo);
const doggoValuesArray = Object.values(doggo);
const doggoEntriesArray = Object.entries(doggo);

// check if a 'key' exists in an object?
console.log(

    doggo.hasOwnProperty("toy")
);