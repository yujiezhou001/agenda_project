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
  const {type} = req.body;
  switch (type) {
    case "status":
      let {taskId, complete_status} = req.body;
      knex('tasks')
        .where({ id: taskId })
        .update({ complete_status: complete_status })
        .returning('complete_status')
        .then(results => res.json(`You have updated your task ${taskId} complete status to ${results}`))
    break;
    case "name_description":
      let {task_name, task_description} = req.body.bodyInfo;
      console.log(task_name)
    break;
  }
  
  
});

module.exports = router;