// server.js

const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

// Initialisation
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());

// Connexion MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/chat-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connecté à MongoDB"))
    .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Route test
app.get("/", (req, res) => {
    res.send("🚀 Chat App Final Job est en cours d’exécution !");
});

// Gestion des connexions Socket.io
io.on("connection", (socket) => {
    console.log("🔌 Un utilisateur est connecté");

    socket.on("message", (msg) => {
        console.log("💬 Nouveau message :", msg);
        io.emit("message", msg); // renvoyer le message à tous les clients
    });

    socket.on("disconnect", () => {
        console.log("❌ Un utilisateur s’est déconnecté");
    });
});

// Démarrage serveur
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
