/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('user_info').del()
  await knex('user_message').del()
  await knex('user_like').del()


  await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE user_info RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE user_message RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE user_like RESTART IDENTITY CASCADE')


  await knex('users').insert([
    { username: 'evan', email: 'evan123@gmail.com', password: '1111' },
    { username: 'aldair', email: 'aldair@gmail.com', password: '2222' },
  ]);
  await knex('user_info').insert([
    { user_id: 1 },
    { user_id: 2 },
  ]);
  await knex('user_message').insert([
    { user_id: 1, message: 'welcome to conjure'},
    { user_id: 1, message: 'thanks you too!'},
  ]);
  await knex('user_like').insert([
    { user_id: 1},
    { user_id: 2}
  ]);
};
