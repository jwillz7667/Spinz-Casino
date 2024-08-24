// services/game-management/index.js
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app, HTTP server, and Socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/games', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Game Session model
const GameSession = mongoose.model('GameSession', new mongoose.Schema({
    gameId: String,
    userId: String,
    state: Object,
}));

app.use(express.json());

// API route to start a game session
app.post('/start', async (req, res) => {
    const { gameId, userId } = req.body;
    const session = new GameSession({ gameId, userId, state: {} });
    await session.save();
    res.status(201).json({ message: 'Game session started', sessionId: session.id });
});

// Real-time updates using Socket.io
io.on('connection', (socket) => {
    socket.on('update', async (data) => {
        const session = await GameSession.findById(data.sessionId);
        if (session) {
            session.state = data.state;
            await session.save();
            io.emit('update', session.state);
        }
    });
});

// Start the service
server.listen(3001, () => {
    console.log('Game management service running on port 3001');
});
