/// <reference path="login.js" />
import

router.route('/login').post(function (req, res){
    let pass = req.body.password;
    user.findOne({userName: req.body.username,pass:pass}).exec(function (err, user) {
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
