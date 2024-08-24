const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Handle the OAuth user information and integrate with your user management system
    return done(null, profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Handle the OAuth user information and integrate with your user management system
    return done(null, profile);
  }
));

module.exports = passport;
