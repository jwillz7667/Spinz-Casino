// services/payment/index.js
const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express app and Sequelize connection
const app = express();
const sequelize = new Sequelize('postgres://jwilly:killa123@localhost:5432/resflow', {
    dialect: 'postgres',
});

// Define Transaction model
const Transaction = sequelize.define('Transaction', {
    userId: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
});

app.use(express.json());

// API route to process a payment
app.post('/pay', async (req, res) => {
    const { userId, amount, currency } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: currency,
            metadata: { userId },
        });

        const transaction = await Transaction.create({
            userId,
            amount,
            currency,
            status: 'pending',
        });

        res.json({ clientSecret: paymentIntent.client_secret, transactionId: transaction.id });
    } catch (error) {
        res.status(500).json({ error: 'Payment processing failed' });
    }
});

// Start the service
app.listen(3002, () => {
    console.log('Payment service running on port 3002');
});
