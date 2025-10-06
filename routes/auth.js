const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.send('User already exists. Try logging in.');

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.redirect('/login.html');
  } catch (err) {
    console.error(err);
    res.send('Signup failed');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.send('Invalid credentials');

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.send('Invalid credentials');

    res.redirect('/explore.html');
  } catch (err) {
    console.error(err);
    res.send('Login failed');
  }
});

module.exports = router;
