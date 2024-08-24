const express = require('express');
const router = express.Router();
const passport = require('../oauth');

// Google OAuth login route
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication
        res.redirect('/profile');
    });

// Facebook OAuth login route
router.get('/auth/facebook',
    passport.authenticate('facebook'));

// Facebook OAuth callback route
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication
        res.redirect('/profile');
    });

module.exports = router;
