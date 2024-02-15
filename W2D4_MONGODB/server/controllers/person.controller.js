import Person from '../models/person.model.js';
// CONTROLLER IS FOR CRUD

// CREATE
async function create(req, res) {
    try {
        const newPerson = await Person.create(req.body); // {}
        //! RES.JSON is what axios will receive in it's .then 
        res.json(newPerson);
    } catch (error) {
        console.log("CREATE error", error);
        res.status(400).json(error);
    }
}

// READ ALL
async function readAll(req, res) {
    try {
        const allOfTheZoo = await Person.find(); // []
        res.json(allOfTheZoo);
    } catch (error) {
        console.log("READALL error", error);
        res.status(400).json(error);
    }
}

export {
    create,
    readAll
};