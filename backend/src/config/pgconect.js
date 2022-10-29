const Client = require('pg').Client

const client = new Client({
  user: "postgres",
  password: "dg1407",  
  host: "localhost",
  port: 5432,  
  database: "EnsinoEAD",
});

module.exports = client;





