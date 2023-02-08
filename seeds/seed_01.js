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
    { username: 'cris', email: 'cris@gmail.com', password: '333' },
    { username: 'chris', email: 'chris@gmail.com', password: '444' },
    { username: 'cece', email: 'cece@gmail.com', password: '5555' },
    { username: 'eman', email: 'eman@gmail.com', password: '666' },
    { username: 'aaron', email: 'aaron@gmail.com', password: '777' },
    { username: 'jowel', email: 'jowel@gmail.com', password: '8888' },
    { username: 'ann', email: 'ann@gmail.com', password: '99999' },
    { username: 'caston', email: 'caston@gmail.com', password: '111100' },
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
