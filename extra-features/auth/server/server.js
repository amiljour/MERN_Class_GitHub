// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


// CONFIG MONGOOSE
require("./config/mongoose.config");

// CONFIG EXPRESS
// app.use(cors()) // Having 2 localhost port to communicate
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
app.use(express.json())  // POST METHOD
app.use(cookieParser());
// Change the app.use(cors()) to the one below
 
// ROUTES
require("./routes/user.routes")(app)

// PORT
app.listen(8000, () => console.log(`Listening on port: 8000`) );
