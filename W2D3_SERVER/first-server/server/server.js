import express from "express";
const app = express();
const port = 1337;

// == MIDDLEWARE ==
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());

const users = [
    { firstName: "Reimu", lastName: "Hakurei", id: 0 },
    { firstName: "Marisa", lastName: "Kirisame", id: 1 },
    { firstName: "Sanae", lastName: "Kochiya", id: 2 },
    { firstName: "Sakuya", lastName: "Izayoi", id: 3 },
    { firstName: "Momiji", lastName: "Inubashiri", id: 4 }
];

const myCoolCallback = (req, res) => {
    res.json(users);
};

// READ ALL
app.get("/api/users", myCoolCallback);

// CREATE
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React later
    console.log("req.body", req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database using a database method
    users.push(req.body);
    // the updated users array
    res.json(users);
});

// READ ONE
app.get("/api/users/:id", (req, res) => {
    // We can use the find method to get the first element that has the matching id
    console.log("req.params", req.params);
    const getUserById = users.find(user => user.id == req.params.id);
    // always add in a console.log to see what is happening
    // console.log(getUserById);
    res.json(getUserById);
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const index = users.findIndex(user => user.id == userId);
    users.splice(index, 1);
    res.json(users);
});

// UPDATE  PUT / PATCH ?
app.put("/api/users/:id", (req, res) => {
    users.forEach((user, idx) => {
        if (user.id == req.params.id) {
            user = { ...user, ...req.body };
            users[idx] = user;
        }
    });
    const updatedUser = users.find(user => user.id == req.params.id);
    res.json(updatedUser);
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`🎈🎈🎈🎈 SERVER is up on PORT:${port} and is listening for REQuests to RESpond to`));