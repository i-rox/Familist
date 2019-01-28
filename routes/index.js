var express = require('express');
var router = express.Router();
var usersRouter=require('./users');
var newUserRouter=require('./newUser');

router.use('/users',usersRouter);
router.use('/newUser',newUserRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({name:'gggg',address:'hyutyf'});
});

router.post('/', function(req, res, next) {
  res.json({name:'bbbbbbbbbb',address:'cccccccc'});
});

module.exports = router;
