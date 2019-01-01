import

router.route('/newGroup').post(function (req, res){
    group.create({ groupName: req.body.groupName,
    }).exec(function (err, newGroup) {
        if (err){
            console.error('GET Error: There was a problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else{
            user.update({_id:req.body.userId},
                {groups:{$push:{groupId:newGroup._id,authorizationId:'manager_id'}}
                }).exec(function (err,userAsManager){
                    if(err){
                        console.error('GET Error: There was a problem retrieving: ' + err);
                        res.status(err.statusCode || 500).json(err);
                    }
                    else{
                        res.json(user);
                    }
                })
            res.json(group);
        }
    });
    });
