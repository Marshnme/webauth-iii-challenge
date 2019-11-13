
exports.up = function(knex) {
    return knex.schema.createTable('user', user => {
        user.increments();

        user.string('username', 128).unique().notNullable();
        user.string('password', 128).notNullable();
        user.string('department', 128);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
