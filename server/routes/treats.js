var express = require("express");
var router = express.Router();
var pool = require('../modules/pool');

// GET /treats
router.get('/', function (req, res) {
  pool.connect(function (err, db, done) { // if you've used (errorConnectingToDatabase, client, done) then what does this change?
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {
      /** ---- YOUR CODE BELOW ---- **/
      // Add code here to get treats from the treatDB

    } // end no error
  }); // end pool connect
}); // end get /treats

/** ---- YOUR CODE BELOW ---- **/

// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>

/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
