import { Router } from "express";
import UserController from "../controllers/user.controller.js";

// Creating a router variable for ease of use
const router = Router();



// All routes with the /users path
router.route("/users")
    .get(UserController.readAll)
    .post(UserController.create);

// All routes with the /users/:id path
router.route("/users/:id")
    .get(UserController.readOne)
    .delete(UserController.delete)
    .put(UserController.update);

export default router;