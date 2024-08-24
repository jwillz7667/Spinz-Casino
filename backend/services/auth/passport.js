// backend/services/auth/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/user'); // Assuming you have a User model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    // Find or create user in your database
    try {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) {
        user = await User.create({ googleId: profile.id, username: profile.displayName });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    // Find or create user in your database
    try {
      let user = await User.findOne({ where: { facebookId: profile.id } });
      if (!user) {
        user = await User.create({ facebookId: profile.id, username: profile.displayName });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize and deserialize user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
