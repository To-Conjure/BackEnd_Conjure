const {Pool} = require('pg')
require('dotenv').config();


const pool = new Pool ({
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    port: process.env.port
  })

// const connectionString = "postgresql://postgres:IXgeDUDAYA7mB8ypcsAo@containers-us-west-29.railway.app:7268/railway"

// const connectionProduction = {
//   connectionString, 
//   ssl: {rejectUnauthorized: false} //This was needed for Heroku, not sure if needed for railways. 
// }

// const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal) // This makes it so fellows don't have to change the Pool every time they push to GitHub.

module.exports = pool
