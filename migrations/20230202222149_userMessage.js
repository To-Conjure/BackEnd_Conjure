/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user_message', table => {
        table.increments('user_message_id').primary();
        table.integer('user_id').notNullable;
        table.foreign('user_id').references('user_id').inTable('users');
        table.string('message').notNullable;
        table.integer('like_id').notNullable;
        table.timestamp("message_date").notNullable().defaultTo(knex.fn.now());
    
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user_message');
};