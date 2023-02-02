/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').del()
  await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')

  await knex('users').insert([
    { username: 'evan', email: 'evan123@gmail.com', password: '1111' },
  ]);
};