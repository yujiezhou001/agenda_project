var express = require('express');
var router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig['development']);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hello")
  knex
    .select('*')
    .from('users')
    .then(users => {
      res.json(users);
    })
});

module.exports = router;
