var express = require('express');
var router = express.Router();
var usersRouter = require('./users');

//var app = express();
router.use('/users', usersRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({name:'gggg',address:'hyutyf'});
});

router.post('/', function(req, res, next) {
  res.json({name:'bbbbbbbbbb',address:'cccccccc'});
});

var MongoClient = require('mongodb').MongoClient;



module.exports = router;
