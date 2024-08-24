const express = require('express');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const router = express.Router();

// Route to enable MFA
router.post('/enable-mfa', (req, res) => {
    const secret = speakeasy.generateSecret({ length: 20 });
    // Store the secret in the user's profile in the database
    qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
        res.json({ secret: secret.base32, qr_code: data_url });
    });
});

// Route to verify MFA
router.post('/verify-mfa', (req, res) => {
    const { token, userSecret } = req.body;
    const verified = speakeasy.totp.verify({
        secret: userSecret,
        encoding: 'base32',
        token: token
    });
    if (verified) {
        res.json({ verified: true });
    } else {
        res.json({ verified: false });
    }
});

// Route to disable MFA
router.post('/disable-mfa', (req, res) => {
    // Remove the MFA secret from the user's profile in the database
    res.json({ mfaDisabled: true });
});

module.exports = router;
