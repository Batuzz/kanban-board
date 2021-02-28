exports.up = function (knex) {
  return Promise.all([
    // Users
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('name').unique().notNull();
      table.string('password').notNull();
      table.string('email').unique().notNull();
    }),

    // Tickets
    knex.schema.createTable('tickets', table => {
      table.increments('id').primary();
      table.string('title').notNull();
      table.string('text').notNull();
      table.integer('authorID').notNull();
      table.enu('status', ['TODO', 'IN_PROGRESS', 'DONE']).defaultTo('TODO').notNull();

      // Foreign keys
      table.foreign('authorID').references('users.id').onDelete('CASCADE');
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTableIfExists('tickets'),
    knex.schema.dropTableIfExists('users'),
  ]);
};
