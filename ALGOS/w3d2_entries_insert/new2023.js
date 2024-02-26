/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
// const expected1 = [["name", "Pizza"], ["calories", 9001]];

// for (let someKey in obj1) {
//     console.log(someKey, obj1[someKey])
// }

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
};

const proto = {
    inheritedKey: "inherited value",
    keyOnProto: "value from proto"
};

const obj3 = Object.assign(Object.create(proto), obj2);

for (let someKey in obj3) {
    console.log(someKey, obj3[someKey])
}
console.log("-------------")
console.log(Object.entries(obj3))


const expected2 = [["firstName", "Foo"], ["lastName", "Bar"], ["age", 99]];

// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(someObj) {
    // remember to write the pseudocode first!
}