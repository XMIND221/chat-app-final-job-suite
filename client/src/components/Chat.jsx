import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        socket.on("message", msg => setMessages(prev => [...prev, msg]));
        return () => socket.off("message");
    }, []);

    const sendMessage = () => {
        if (input) {
            socket.emit("message", input);
            setInput("");
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <div>
                {messages.map((m, i) => <div key={i}>{m}</div>)}
            </div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
}

export default Chat;
