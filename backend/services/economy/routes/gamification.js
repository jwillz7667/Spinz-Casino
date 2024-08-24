const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Challenges = require('../models/Challenges');

// Route to get daily reward
router.post('/daily-reward', async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        const rewardAmount = 100; // Example amount
        user.sweepsCoins += rewardAmount;
        await user.save();

        res.json({ message: 'Daily reward claimed', reward: rewardAmount, sweepsCoins: user.sweepsCoins });
    } catch (err) {
        res.status(500).json({ error: 'Failed to claim daily reward' });
    }
});

// Route to complete a challenge
router.post('/complete-challenge', async (req, res) => {
    const { userId, challengeId } = req.body;
    try {
        const user = await User.findById(userId);
        const challenge = await Challenges.findById(challengeId);

        if (challenge && !user.completedChallenges.includes(challengeId)) {
            user.sweepsCoins += challenge.reward;
            user.completedChallenges.push(challengeId);
            await user.save();

            res.json({ message: 'Challenge completed', reward: challenge.reward, sweepsCoins: user.sweepsCoins });
        } else {
            res.status(400).json({ error: 'Challenge already completed or not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to complete challenge' });
    }
});

// Route to get leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ sweepsCoins: -1 }).limit(10);
        res.json({ leaderboard });
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve leaderboard' });
    }
});

module.exports = router;
