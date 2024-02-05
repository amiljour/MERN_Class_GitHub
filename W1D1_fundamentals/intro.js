
const a = [1, 2, 3];
a.push(100);
// console.log(a);

var x = [1, 2, 3];

function sayHi(someVar) {
    someVar.push(10);

}
sayHi(x);

// console.log("what is this?", x); // ?

// pass by value vs pass by reference

// ----------- destructuring ------------
const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

const { email: something, firstName } = person1;
// console.log('email: ', something);
// console.log('firstName: ', firstName);

// const fname = person.firstName;


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const first = animals[0];
// const someElement = animals[2];

// const [one, , z] = animals;

// console.log(one, z)


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

const { addresses: [, { city }] } = person;
console.log(city)







