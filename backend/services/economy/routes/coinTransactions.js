const express = require('express');
const router = express.Router();

// Mock database models
const Transactions = require('../models/Transactions');
const User = require('../models/User');

// Route to earn coins (e.g., daily rewards)
router.post('/earn-coins', async (req, res) => {
    const { userId, amount, reason } = req.body;
    try {
        const user = await User.findById(userId);
        user.sweepsCoins += amount;
        await user.save();

        await Transactions.create({ userId, type: 'earn', amount, reason });

        res.json({ message: 'Coins earned successfully', sweepsCoins: user.sweepsCoins });
    } catch (err) {
        res.status(500).json({ error: 'Failed to earn coins' });
    }
});

// Route to spend coins (e.g., entering sweepstakes)
router.post('/spend-coins', async (req, res) => {
    const { userId, amount, reason } = req.body;
    try {
        const user = await User.findById(userId);
        if (user.sweepsCoins < amount) {
            return res.status(400).json({ error: 'Insufficient sweeps coins' });
        }
        user.sweepsCoins -= amount;
        await user.save();

        await Transactions.create({ userId, type: 'spend', amount, reason });

        res.json({ message: 'Coins spent successfully', sweepsCoins: user.sweepsCoins });
    } catch (err) {
        res.status(500).json({ error: 'Failed to spend coins' });
    }
});

// Route to transfer coins to another user
router.post('/transfer-coins', async (req, res) => {
    const { senderId, recipientId, amount } = req.body;
    try {
        const sender = await User.findById(senderId);
        const recipient = await User.findById(recipientId);

        if (sender.sweepsCoins < amount) {
            return res.status(400).json({ error: 'Insufficient sweeps coins' });
        }

        sender.sweepsCoins -= amount;
        recipient.sweepsCoins += amount;

        await sender.save();
        await recipient.save();

        await Transactions.create({ userId: senderId, type: 'transfer', amount, recipientId });
        await Transactions.create({ userId: recipientId, type: 'receive', amount, senderId });

        res.json({ message: 'Coins transferred successfully', senderCoins: sender.sweepsCoins, recipientCoins: recipient.sweepsCoins });
    } catch (err) {
        res.status(500).json({ error: 'Failed to transfer coins' });
    }
});

module.exports = router;
