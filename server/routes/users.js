const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users');

router.get('/', (req, res) => {
  Users.findAll()
  .then((response => {
    console.log(response);
    res.send('test2');
  }))
  .catch((err) => console.error('error => ',err))
});

module.exports = router;