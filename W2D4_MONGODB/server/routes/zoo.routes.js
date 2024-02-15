import { Router } from 'express';
import { create, readAll } from "../controllers/person.controller.js";
const router = Router();

router.route("/zoo")
    .get(readAll)
    .post(create);

export default router;