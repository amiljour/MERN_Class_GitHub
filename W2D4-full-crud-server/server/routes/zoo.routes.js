import { Router } from "express";
const router = Router();
import { createAnimal, deleteOneAnimal, getOneAnimal, readAllAnimals, updateOneAnimal, } from "../controllers/zoo.controller.js";

router.route("/animals")
    .get(readAllAnimals)
    .post(createAnimal);

router.route("/animals/:id")
    .get(getOneAnimal)
    .put(updateOneAnimal)
    .delete(deleteOneAnimal);

export default router;