
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {

    table.increments('id').primary().unsigned();
    table.string('name')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
