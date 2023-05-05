var express = require('express');
var router = express.Router();

// Add your resource-specific routes here
const { message} = require('../models');

// Create a new message
router.get('/', async(req,res)=>{
  res.json({message: "Success!"})
})

router.post('/', async (req, res) => {
  try {
    const savedMessage = await message.create(req.body);
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error });
  }
});

module.exports = router;