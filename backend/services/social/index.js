// services/social/index.js
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app, HTTP server, and Socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/social', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User and Friend models
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, unique: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}));

app.use(express.json());

// API route to send a friend request
app.post('/friend-request', async (req, res) => {
    const { senderId, receiverId } = req.body;
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);
    if (sender && receiver) {
        sender.friends.push(receiver);
        receiver.friends.push(sender);
        await sender.save();
        await receiver.save();
        res.json({ message: 'Friend request accepted' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Real-time chat using Socket.io
io.on('connection', (socket) => {
    socket.on('message', (data) => {
        io.emit('message', data);
    });
});

// Start the service
server.listen(3003, () => {
    console.log('Social interaction service running on port 3003');
});
