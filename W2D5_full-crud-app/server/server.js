import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/zoo.routes.js";
const app = express();

// -- middleware --
app.use(express.json(), cors());
app.use("/api", router);

dotenv.config();
const PORT = process.env.PORT;

const DB_name = "zoo-demo";
dbConnect(DB_name);

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);