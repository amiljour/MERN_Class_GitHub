// 1. import all dependencies
const express = require("express")
const cors = require("cors")
const app = express()

// 1.5 config mongooose
require('./configs/mongoose.config');

// 2. config express
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// 3. run the routes
require("./routes/job.routes")(app)

//4. RUN YOUR EXPRESS SERVER **
app.listen(8000, () => console.log(`Listening on port: 8000`) );