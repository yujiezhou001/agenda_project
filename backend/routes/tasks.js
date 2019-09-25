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
      const {taskId} = req.body;
      //separate complete_status from two post requests
      let {complete_status} = req.body;
      knex('tasks')
        .where({ id: taskId })
        .update({ complete_status: complete_status })
        .returning('complete_status')
        .then(results => res.json(`You have updated your task ${taskId} complete status to ${results}`))
    break;
    case "name_description":
      const {task_name, task_description, form_complete_status} = req.body.bodyInfo;
      const taskObj = {
        task_name: task_name,
        task_description: task_description,
        complete_status: form_complete_status
      }
      knex('tasks')
      .insert([taskObj])
      .returning(['id', 'task_name', 'task_description', 'complete_status'])
      .then(results => res.json(results))
    break;
  }
  
  
});

module.exports = router;