const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

// Route to update user profile
router.put('/profile', (req, res) => {
    const { userId, newProfileData } = req.body;
    // Update the user's profile in the database
    res.json({ message: 'Profile updated successfully' });
});

// Route to upload avatar
router.post('/profile/avatar', upload.single('avatar'), (req, res) => {
    const avatarFile = req.file;
    // Upload the avatar to S3 and update the user's profile with the new avatar URL
    res.json({ message: 'Avatar uploaded successfully' });
});

// Route to change password
router.post('/change-password', (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;
    // Verify the current password and update the password in the database
    res.json({ message: 'Password changed successfully' });
});

module.exports = router;
