var express = require('express');
var router = express.Router();
const Users = require('../models/user');

//var UserModel= mongoose

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

router.get('/:id', function (req, res, next) {
  Users.find({_id:req.params.id}, function (err, users) {
  Users.findById(req.params.id, function (err, user) {
    if (err) {
      res.status('400');
    }
    else {
      res.json(user);
      // res.json([{ username: 'gggg', useraddress: 'hyutyf' }, { username: 'gggg', useraddress: 'hyutyf' }]);
    }
  })
}); 
});
//req.body
router.post('/', function (req, res, next) {
    Users.create(req.body, function (err, user) {
        if (err) {
            res.status('400');
        }
        else {
            res.json(user);
        }
    })
});

router.post('/login', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'abc' && password === '123456') {
    res.json(true);
  }
  else {
    res.json(false);
  }
});

router.delete('/deleteUser', function(req, res, next){
  Users.deleteOne({userName:req.body.username}, function(err, obj){
    if(err)
    {
      console.log(err+' couldnt delete');
    }
    else{
      res.json(obj);
    }
  });
});

module.exports = router;
