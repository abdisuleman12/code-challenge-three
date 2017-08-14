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
      //SELECT * FROM treats
      db.query('SELECT * FROM treats;', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                    console.log(result.rows);
                    // sending over an array of objects [{0},{1},{2}] response[0].tasks_to_add
                }
            });

    } // end no error
  }); // end pool connect
}); // end get /treats

/** ---- YOUR CODE BELOW ---- **/

// POST /treats

router.post('/', function (req, res) {
  pool.connect(function (err, db, done) { // if you've used (errorConnectingToDatabase, client, done) then what does this change?
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {
      /** ---- YOUR CODE BELOW ---- **/
      db.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3)', [req.body.name,req.body.description,req.body.pic] , function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                    
                    // sending over an array of objects [{0},{1},{2}] response[0].tasks_to_add
                }
            });

    } // end no error
  }); // end pool connect
})

// PUT /treats/<id>

router.put('/:id', function (req, res) {
  editId = req.params.id
  pool.connect(function (err, db, done) { // if you've used (errorConnectingToDatabase, client, done) then what does this change?
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {
      /** ---- YOUR CODE BELOW ---- **/
      db.query('UPDATE treats SET name =$1 , description =$2, pic = $3 WHERE id = $4 ', [req.body.name,req.body.description,req.body.pic, editId] , function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                    
                    // sending over an array of objects [{0},{1},{2}] response[0].tasks_to_add
                }
            });

    } // end no error
  }); // end pool connect
})



// DELETE /treats/<id>

router.delete('/:id', function (req, res) {
  deleteId = req.params.id
  pool.connect(function (err, db, done) { // if you've used (errorConnectingToDatabase, client, done) then what does this change?
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {
      /** ---- YOUR CODE BELOW ---- **/
      db.query('DELETE FROM treats WHERE id = $1 ', [deleteId] , function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                    
                }
            });

    } // end no error
  }); // end pool connect
})

/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
