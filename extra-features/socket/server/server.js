
   
const express = require("express");
const app = express();
const PORT = 8000;
const server = app.listen(PORT, () => console.log(`server up on PORT:${PORT}`));

const io = require("socket.io")(server, {cors: true});

io.on("connection", socket => {
    console.log(socket.id);

    // listen for a client event
    socket.on("chat", (client_input) => {
        console.log("got a message", client_input);

        // emit this back to the client / everyone
        io.emit('post chat', client_input)
    })
})

