const express = require('express');
const coinTransactionsRoutes = require('./routes/coinTransactions');
const gamificationRoutes = require('./routes/gamification');
const compliance = require('./compliance/compliance');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use('/', coinTransactionsRoutes);
app.use('/', gamificationRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Economy service running on port ${PORT}`);
});
