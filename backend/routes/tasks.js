var express = require('express');
var router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig['development']);

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  console.log("hello")
  knex
    .select('*')
    .from('tasks')
    .then(tasks => {
      res.json(tasks);
    })
});

router.post('/', function(req, res, next) {
  if (req.body.type === "status") {
    console.log(req.body.status)
    res.json(req.body.status)
  }
  
});

module.exports = router;