exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('tasks').del(),
    knex.raw('ALTER SEQUENCE tasks_id_seq RESTART WITH 1'),
    knex('tasks').then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_name: 'Clean the Room',
          task_description: 'Start with bathroom, especially the sink and bathtub',
          complete_status: false,
        },
        {
          task_name: 'Do laundry',
          task_description: 'Separate washes for clothes with different colors',
          complete_status: false,
        },
        {
          task_name: 'Take A Shower',
          task_description: 'Try the newly bought sponge',
          complete_status: false,
        },
      ]);
    }),
    knex.raw('SELECT setval(\'tasks_id_seq\', (SELECT MAX(id) from "tasks"));'),
  ]);
};
