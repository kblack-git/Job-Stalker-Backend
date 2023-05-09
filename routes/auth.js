const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { user } = require("../models");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are both required." });
  }
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await user.create({ username, password: hashedPassword });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const myUser = await user.findOne({ where: { username: req.body.username } });

    if (!myUser) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, myUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: myUser.id }, 'your_jwt_secret', { expiresIn: '6h' });
    res.status(200).json({message: "Successful Login!", token:token, myUser:myUser.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
