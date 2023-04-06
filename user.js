const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get user info
router.get('/user', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user info
router.put('/change/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findById(req.params.id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (password) user.password = password;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
