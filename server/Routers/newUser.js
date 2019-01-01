
router.route('/newUser').post(function (req, res) {
    user.findOne({
        _id: req.body.UserId, authorizationId: '4'
    }).exec(function (err, authorizationAddUser) {
        if (err) {
            console.error('GET Error: There was a problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else {
            user.create({
                userName: req.body.userName
            }).exec(function (err, newUser) {
                if (err) {
                    console.error('GET Error: There was a problem retrieving: ' + err);
                    res.status(err.statusCode || 500).json(err);
                }
                else {
                    res.json(user);
                }
            })
        }
    })
});
