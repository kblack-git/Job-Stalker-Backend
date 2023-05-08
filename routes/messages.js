var express = require('express');
var router = express.Router();
const { authenticate } = require('../middlewares/auth');
// Add your resource-specific routes here
const { message} = require('../models');

// Create a new message
// router.get('/', authenticate,async(req,res)=>{
router.get('/', async(req,res)=>{
  try {
    const savedMessage = await message.findAll(req.body);
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error getting message', error });
  }
})

// router.post('/', authenticate,async (req, res) => {
  router.post('/', async (req, res) => {
  try {
      const savedMessage = await message.create(req.body);
      res.status(201).json(savedMessage);
    } catch (error) {
      res.status(500).json({ message: 'Error creating message', error });
    }
  });

  router.get("/delall", function(req, res, next) {
    message.destroy({
      where: {},
      truncate:true
    }).then(function(result) {
      res.json({
        status: 1,
        data: result
      });
    }).catch(next);
  });
  router.get("/:id/del", function(req, res, next) {
    message.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json({
        status: 1,
        data: result
      });
    }).catch(next);
  });


  module.exports = router;
