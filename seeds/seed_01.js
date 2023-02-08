/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt');
const salt = 10;

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
    { username: 'evan', email: 'evan123@gmail.com', password: bcrypt.hashSync('1111', salt)},
    { username: 'aldair', email: 'aldair@gmail.com', password: bcrypt.hashSync('2222', salt)},
    { username: 'cris', email: 'cris@gmail.com', password: bcrypt.hashSync('333', salt) },
    { username: 'chris', email: 'chris@gmail.com', password: bcrypt.hashSync('4444', salt) },
    { username: 'cece', email: 'cece@gmail.com', password: bcrypt.hashSync('555', salt) },
    { username: 'eman', email: 'eman@gmail.com', password: bcrypt.hashSync('666', salt) },
    { username: 'aaron', email: 'aaron@gmail.com', password: bcrypt.hashSync('777', salt) },
    { username: 'jowel', email: 'jowel@gmail.com', password: bcrypt.hashSync('888', salt) },
    { username: 'ann', email: 'ann@gmail.com', password: bcrypt.hashSync('999', salt) },
    { username: 'caston', email: 'caston@gmail.com', password: bcrypt.hashSync('111100', salt) },
  ]);
  await knex('user_info').insert([
    { user_id: 1 },
    { user_id: 2 },
    { user_id: 3 },
    { user_id: 4 },
    { user_id: 5 },
    { user_id: 6 },
    { user_id: 7 },
    { user_id: 8 },
    { user_id: 9},
    { user_id: 10},
  ]);
  await knex('user_message').insert([
    { user_id: 1, message: 'welcome to conjure'},
    { user_id: 1, message: 'thanks you too!'},
    { user_id: 2, message: 'ggs'},
    { user_id: 2, message: 'well played'},
    { user_id: 3, message: 'lol'},
    { user_id: 3, message: 'rematch?'},
    { user_id: 4, message: 'goat'},
    { user_id: 4, message: 'you the king!'}, 
    { user_id: 5, message: '<3'},
    { user_id: 5, message: 'simply too good'}, 
    { user_id: 5, message: 'cooking'},
    { user_id: 5, message: 'cheers'}, 
    { user_id: 6, message: 'Have a good day'},
    { user_id: 7, message: 'please add me'}, 
  ]);
  await knex('user_like').insert([
    { user_id: 1, user_message_id: 1},
    { user_id: 2, user_message_id: 1 },
    { user_id: 3, user_message_id: 1 },
    { user_id: 4, user_message_id: 2 },
    { user_id: 5, user_message_id: 2 },
    { user_id: 6, user_message_id: 2 },
    { user_id: 7, user_message_id: 3 },
    { user_id: 8, user_message_id: 3 },
    { user_id: 9, user_message_id: 4},
    { user_id: 10, user_message_id: 5},
  ]);
};
