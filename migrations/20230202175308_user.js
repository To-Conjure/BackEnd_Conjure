/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", table =>{
      table.increments('user_id').primary();
      table.boolean("inuse").notNullable().defaultTo(false)
      table.string("username").notNullable;
      table.string("email").notNullable;
      table.string("password").notNullable;
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable("users")
  };