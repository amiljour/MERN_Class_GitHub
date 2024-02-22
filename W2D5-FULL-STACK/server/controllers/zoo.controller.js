// import the model here
import Zoo from "../models/zoo.model.js";

// CREATE
async function createAnimal(req, res) {
    try {
        console.log("req.body", req.body);
        const newAnimal = await Zoo.create(req.body);
        console.log('newAnimal: ', newAnimal);
        res.json(newAnimal); // {}
    } catch (error) {
        console.log("❌❌ SERVER CONTROLLER error", error);
        res.status(400).json(error);
    }
}

function createThen(req, res) {
    Zoo.create(req.body)
        .then(res => {
            res.status(201).json(res);
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

// READ ALL
async function readAllAnimals(req, res) {
    try {
        const allAnimals = await Zoo.find(); // []
        // ! this is what REACT's axios will receive
        res.json(allAnimals); // []
    } catch (error) {
        console.log("❌❌ SERVER CONTROLLER error", error);
        // ! this is what REACT's axios will receive
        res.status(400).json(error);
    }
}

// READ ONE
async function getOneAnimal(req, res) {
    try {
        const foundAnimal = await Zoo.findById(req.params.id);
        res.json(foundAnimal);
    } catch (error) {
        console.log("❌❌ SERVER CONTROLLER error", error);
        res.status(400).json(error);
    }
}

// UPDATE
async function updateOneAnimal(req, res) {
    try {
        const updatedAnimal = await Zoo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });
        console.log('✅✅✅ updatedAnimal: ', updatedAnimal);
        if (updatedAnimal === null) {
            res.status(400).json({ message: "couldn't find the id" });
        }
        res.json(updatedAnimal);
    } catch (error) {
        console.log("❌❌ SERVER CONTROLLER error", error);
        res.status(400).json(error);
    }
}

// DELETE
async function deleteOneAnimal(req, res) {
    try {
        const deletedAnimal = await Zoo.findByIdAndDelete(req.params.id);
        res.json(deletedAnimal);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createAnimal,
    deleteOneAnimal,
    getOneAnimal,
    readAllAnimals,
    updateOneAnimal,
};