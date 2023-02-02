/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user_info', table => {
        table.increments('user_info_id').primary();
        table.integer('kills').notNullable().defaultTo(0)
        table.integer('deaths').notNullable().defaultTo(0)
        table.integer('wins').notNullable().defaultTo(0)
        table.integer('loss').notNullable().defaultTo(0)
        table.integer('games').notNullable().defaultTo(0)
        table.integer('user_id').notNullable;
        table.foreign('user_id').references('user_id').inTable('users');
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user_info');
};