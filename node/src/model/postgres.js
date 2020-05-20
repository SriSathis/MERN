const {Client} = require('./node_modules/pg')
require('./node_modules/dotenv').config()

const client =  new Client({
    host : process.env.PG_HOST,
    port : process.env.PG_PORT,
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DB
})

client.connect()
    .then(() => console.log("Postgres Connected Successfully"))
    .catch(err => console.log(err))

module.exports = {
    client
}