// backend/services/auth/routes/password-reset.js
const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const User = require('../models/user');
const router = express.Router();

// Request password reset
router.post('/password-reset', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(404).send('No user with that email');

  const token = crypto.randomBytes(32).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    to: user.email,
    from: 'passwordreset@yourdomain.com',
    subject: 'Password Reset',
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://${req.headers.host}/reset/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`
  };
  await transporter.sendMail(mailOptions);

  res.send('Password reset email sent');
});

// Verify token and reset password
router.post('/reset/:token', async (req, res) => {
  const user = await User.findOne({
    where: {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { [Op.gt]: Date.now() }
    }
  });

  if (!user) return res.status(400).send('Password reset token is invalid or has expired.');

  user.password = req.body.password; // Remember to hash the password before saving
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  res.send('Password has been reset');
});

module.exports = router;
