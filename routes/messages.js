const express = require('express');
const router = express.Router();

// Add your resource-specific routes here
const { Message } = require('../models');

// Create a new message
router.post('/', async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error });
  }
});
