/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user_like', table => {
        table.increments('like_id').primary();
        table.integer('user_id').notNullable;
        table.foreign('user_id').references('user_id').inTable('users');
        table.integer('likes').notNullable().defaultTo(0)
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user_like');
};