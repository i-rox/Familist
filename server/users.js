var express = require('express');
var router = express.Router();
const Users = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.find({}, function (err, users) {
    if (err) {
      res.status('400');
    }
    else {
      res.json(users);
      // res.json([{ username: 'gggg', useraddress: 'hyutyf' }, { username: 'gggg', useraddress: 'hyutyf' }]);
    }
  })
});

router.post('/login', function (req, res, next) {
 // Users.find({_id:req.params.id}, function (err, users) {
  Users.findById(req.body.id, function (err, user) {
    if (err) {
     console.log(err);
     res.status('400');     
    }
    else {
      res.json(user);
      // res.json([{ username: 'gggg', useraddress: 'hyutyf' }, { username: 'gggg', useraddress: 'hyutyf' }]);
    }
  })
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.post('/signUp', function (req, res, next) {  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var userObj = { password: req.body.password, firstName:req.body.firstName, lastName:req.body.lastName};
    var query =userObj;
    dbo.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);    
      if(result.length)
      { 
        console.log('user already exist');    
        res.json(false);
      }
      else
      {
        dbo.collection('users').insertOne(userObj, function(err, obj) {
          if (err) throw err;
          console.log("1 user's document inserted"+ userObj);       
          res.json(true);
        });
      } 
      db.close();
    });
  });
 });

router.post('/getUser', function (req, res, next) { 
 MongoClient.connect(url, function(err, db) {
   var dbo = db.db("mydb");
  if (err) throw err;
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
    res.json(result);
  });
});
});
router.post('/', function (req, res, next) {
  res.json([{ username: 'gggg', useraddress: 'hyutyf' }, { username: 'gggg', useraddress: 'hyutyf' }]);
});

router.post('/todo', function (req, res, next) {
  if(req.body.id==='1')
  {
     res.json([{ todo: 'today', numTasks: '4' }, { username: 'tomorrow', useraddress: '8' }]);
  }
  else{
     res.json([{ todo: 'monthly', numTasks: '88' }, { username: 'year', useraddress: '448' }]);
  }
 
});

/* router.post('/login', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'abc' && password === '123456') {
    res.json(true);
  }
  else {
    res.json(false);
  }
  });
 */
module.exports = router;
