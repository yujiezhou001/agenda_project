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
  const {taskId, taskStatus, type} = req.body;
  if (type === "status") {
    console.log(taskStatus)
    res.json("You have submitted a post request")
  }
  
});

module.exports = router;