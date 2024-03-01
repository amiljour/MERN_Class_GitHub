const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: {
        loud: true,
        sound: "woof"
    },
}

// loop over an object:
for(let someKey in doggo) {
    console.log(someKey, doggo[someKey])
}

// --------------
//               0         1         2          3
const animals = ["lion", "zebra", "elephant", "giraffe"];

for(let someElem of animals) {
    console.log(someElem)
}

// extract the keys in an Array
Object.keys(doggo);

Object.values(doggo);

Object.entries(doggo);

// check if a key exists in an obj
// T/F O(1)
console.log(
    doggo.hasOwnProperty("isAGoodBoi") 
)