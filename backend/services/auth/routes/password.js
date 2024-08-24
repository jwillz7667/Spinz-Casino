const express = require('express');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');
const router = express.Router();

sgMail.setApiKey(process.env.EMAIL_SERVICE_API_KEY);

// Function to send password reset email
function sendPasswordResetEmail(email, token) {
    const msg = {
        to: email,
        from: 'no-reply@yourdomain.com',
        subject: 'Password Reset Request',
        text: `Please use the following link to reset your password: https://yourdomain.com/reset-password?token=${token}`,
    };
    sgMail.send(msg);
}

// Route to request password reset
router.post('/password-reset-request', (req, res) => {
    const { email } = req.body;
    const token = crypto.randomBytes(20).toString('hex');
    // Store the token in the database and send it to the user
    sendPasswordResetEmail(email, token);
    res.json({ message: 'Password reset link sent to your email' });
});

// Route to reset password
router.post('/password-reset', (req, res) => {
    const { token, newPassword } = req.body;
    // Verify the token and update the password in the database
    res.json({ message: 'Password has been reset successfully' });
});

module.exports = router;
