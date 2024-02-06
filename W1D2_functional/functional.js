// callbacks

setTimeout(function () {
    console.log("hello after 3 seconds");
}, 3000);


// ------ ARRAY.map() ----------
const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const coolAnimals = animals.map((eachAnimal, i) => {
    return `${i + 1} - ${eachAnimal} is awesome!`;
});

// console.log(coolAnimals);

// --- ARRAY.filter() --------
// I want to return a new array with all the animals that have a string length less than or equal to 5

const filteredAnimals = animals.filter((eachAnimal, idx) => {
    // if (eachAnimal.length <= 5) {
    //     return true;
    // } else {
    //     return false;
    // }
    // return eachAnimal.length <= 5 ? true : false;
});


const filteredAnimalsShort = animals.filter(eachAnimal => eachAnimal.length <= 5);
// console.log(filteredAnimalsShort);


const people = Object.freeze([
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
]);

// filter people with age greater than or equal to 30
const filteredPeople = people.filter((person) => {
    if (person.age >= 30) {
        return true;
    } else {
        return false;
    }
});

// console.log(filteredPeople);

const filtered2 = people.filter((eachPerson) => eachPerson.age >= 30);

const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 35, "name": "Clefairy", "types": ["normal"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array containing just the first type of all the pokémon whose second type is "flying"
const something = pokemon.filter((p) => {
    return p.types[1] === "flying";
}).map((p) => {
    return p.types[0];
});
console.log('something: ', something);






// an array of pokémon objects where the id is evenly divisible by 3
const newPokemon = pokemon.filter((poke) => {
    return poke.id % 3 === 0;
});
// console.log('newPokemon: ', newPokemon);
