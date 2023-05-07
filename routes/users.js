var express = require('express');
var router = express.Router();

const { user } = require('../models');

// Create a new message
router.get('/', async(req,res)=>{
  try {
    const theUser = await user.findAll(req.body);
    res.status(201).json(theUser);
  } catch (error) {
    res.status(500).json({ message: 'Error getting user', error });
  }
})

router.post('/', async (req, res) => {
  try {
    const theUser = await user.create(req.body);
    res.status(201).json(theUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
