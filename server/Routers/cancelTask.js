
router.route('/cancelTask').post(function (req, res) {
    user.findOne({
        _id: req.body.UserId, authorizationId: 'not 2'
    }).exec(function (err, newTask) {
        if (err) {
            console.error('GET Error: There was a problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else {
            task.delete({ _Id: req.body.taskId
            }).exec(function (err, newTask) {
                if (err) {
                    console.error('GET Error: There was a problem retrieving: ' + err);
                    res.status(err.statusCode || 500).json(err);
                }
                else{
                    res.json(task);
                }
            }
         )}
    })
})
