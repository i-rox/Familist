/*  <reference path="login.js" /> */
var express = require('express');
var router = express.Router();
const Users = require('../models/user');

router.route('/login').post(function (req, res){
    let pass = req.body.password;
    Users.findOne({userName: req.body.username,pass:pass}).exec(function (err, user) {
        if (err){
            console.error('GET Error: There was ka problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else{
            res.json(user);
        }
    }
    );
});

module.exports = router;