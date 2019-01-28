//import

router.route('/viewTasks').post(function (req, res){
    task.find({_id:req.body.userId},
        {_id:req.body.groupId},
        {businessName:req.body.businessName},
        {status:req.body.status},
        {frequency:req.body.frequency},
        {priority:req.body.priority},
        {dateCreated:req.body.dateCreated},
        {assignedTo:req.body.assignedTo},
        {addedBy:req.body.addedBy
        }).exec(function (err, viewTasks) {
        if (err){
            console.error('GET Error: There was a problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else{
            res.json(tasks);
        }
    });
    });
