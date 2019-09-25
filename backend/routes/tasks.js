var express = require('express');
var router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig['development']);

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  knex
    .select('*')
    .from('tasks')
    .then(tasks => {
      res.json(tasks);
    })
});

/* UPDATE task status. */
router.post('/', function(req, res, next) {
  switch (type) {
    case "status":
      const {taskId, complete_status, type} = req.body;
      knex('tasks')
        .where({ id: taskId })
        .update({ complete_status: complete_status })
        .returning('complete_status')
        .then(results => res.json(`You have updated your task ${taskId} complete status to ${results}`))
    break;
    case "name_description":
      console.log(req.body)
  }
  
  
});

module.exports = router;