// backend/services/auth/index.js
const express = require('express');
const passport = require('./passport');
const session = require('express-session');
const oauthRoutes = require('./routes/oauth');
const profileRoutes = require('./routes/profile');
const passwordResetRoutes = require('./routes/password-reset');

const app = express();

// Middleware setup
app.use(express.json());
app.use(session({ secret: 'your_session_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Route setup
app.use(oauthRoutes);
app.use(profileRoutes);
app.use(passwordResetRoutes);

// Start the service
app.listen(3000, () => {
  console.log('Auth service running on port 3000');
});
