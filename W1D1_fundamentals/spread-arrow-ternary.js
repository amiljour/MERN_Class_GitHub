
// ...spread
const a = [11, 22, 33];
const b = [...a];

// a.push(100);
// b.push(500);

console.log(a); // ? [11, 22, 33]
console.log(b); // ?

console.log(a === b);


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const copyPerson = { ...person };
person.username = "cool";
console.log(person.username);
console.log(copyPerson.username);


// the ...rest
function doStuff(first, second, ...stuff) {
    console.log(first, second, stuff); // ?
}

doStuff('a', 'b', 'c', 'd', 'e');

// somethingDoing();
function somethingDoing() { } // <-----  standalone function
const somethingDoing = function () { }; // <------ anonymous function stored in a variable
const obj = {
    doSomething: function () { } // <----------- method
};

// obj.doSomething()
// ---- arrow functions
// implicit vs explicit returns

const hello2 = function (name) {
    return "hello " + name;
};

// arrow function
const helloArrow = (name) => {
    return "hello " + name;
};

const implicitReturn = () => 10;
const explicitReturn = () => {
    console.log("hello");
    return 10;
};

const multiplyNums = function (a, b) {
    return a * b;
};

const multiplyNumsArrow = (a, b) => {
    return a * b;
};

"this";

// ---------ternary operator ---------

// if (a > b) {
//     return "cool";
// } else {
//     return "not cool";
// }
const x = "aaaa"; // not an error just a falsy value
x.length > 1 ? console.log("yes") : console.log("no");
