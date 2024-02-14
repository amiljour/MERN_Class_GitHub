import express from "express";
const app = express();
const port = 1337;
// here, we require the suffix .js to get the routes
import router from './routes/user.routes.js';

// == MIDDLEWARE ==
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());

app.use('/api', router);


// this needs to be below the other code blocks
app.listen(port, () => console.log(`🎈🎈🎈🎈 SERVER is up on PORT:${port} and is listening for REQuests to RESpond to`));