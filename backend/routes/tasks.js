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
  const {taskId, complete_status, type} = req.body;
  console.log(complete_status, type, taskId)
  knex('tasks')
  .where({ id: taskId })
  .update({ complete_status: complete_status })
  .returning('complete_status')
  .then(results => res.json(`You have updated your task${taskId} status to ${results}`))
  
});

module.exports = router;