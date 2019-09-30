
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
  
      table.increments('id').primary().unsigned();
      table.string('task_name');
      table.string('task_description');
      table.boolean('complete_status');
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  };
