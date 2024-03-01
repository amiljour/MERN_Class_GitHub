import io from "socket.io-client";
import React, { useEffect, useState } from 'react';

const Container = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")
    const [approve, setApprove] = useState(false)

    const [socket] = useState(() => io(':8000'));

    const onSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", {username: username, content:input});
        setInput("")
    }

    useEffect(() => {
        // listen from server
        socket.on("post chat", (msg) => {

            setMessages(prevMsgState => [...prevMsgState, msg])
        })

        // previous react: socket.disconnect(true) 
        // react 18: socket.removeAllListeners()
        return () => socket.removeAllListeners();


    }, [socket])

    const usernameHandler= (e)=>{
        e.preventDefault()
        if(username){
            setApprove(true)
        }
    }

    return (
        <div>
            <h1>Socket-io</h1>
            {
                !approve?
                    <form onSubmit={usernameHandler}>
                        <label>Enter your name </label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        <button> Enter chat</button>
                    </form> :
                    <>
                        <form onSubmit={onSubmitHandler}>
                            <input type="text" name='msg' onChange={(e) => setInput(e.target.value)} value={input} />
                            <button>send</button>
                        </form>
                        <div>
                            {
                                messages.map((msg, i) => (<p key={i}>{msg.username} : {msg.content}</p>))
                            }
                        </div>
                    </>

            }



        </div>
    );
}

export default Container
