const express = require('express');
const passport = require('./oauth');
const oauthRoutes = require('./routes/oauth');
const mfaRoutes = require('./routes/mfa');
const profileRoutes = require('./routes/profile');
const passwordRoutes = require('./routes/password');
const session = require('express-session');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
app.use('/', oauthRoutes);
app.use('/', mfaRoutes);
app.use('/', profileRoutes);
app.use('/', passwordRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
