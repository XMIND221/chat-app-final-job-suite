const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
});

app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connecté à MongoDB"))
    .catch(err => console.error("❌ Erreur MongoDB :", err));

io.on("connection", (socket) => {
    console.log("🔌 Un utilisateur est connecté");
    socket.on("message", (msg) => io.emit("message", msg));
    socket.on("disconnect", () => console.log("❌ Un utilisateur s’est déconnecté"));
});

const PORT = 5000;
server.listen(PORT, () => console.log(`🚀 Backend lancé sur http://localhost:${PORT}`));
