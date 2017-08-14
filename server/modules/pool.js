var pg = require("pg");

var config = {
  database: "treats", // name of your database
  host: "localhost", //where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 //30 seconds to connect
};

module.exports = new pg.Pool(config);