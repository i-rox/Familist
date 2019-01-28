var express = require('express');
var router = express.Router();

router.route('/newTask').post(function (req, res) {
    user.findOne({
        _id: req.body.UserId,authorizationId:'not 1'
    }).exec(function (err, newTask) {
        if (err) {
            console.error('GET Error: There was a problem retrieving: ' + err);
            res.status(err.statusCode || 500).json(err);
        }
        else {
            task.create({
                taskName: req.body.taskName,
                description: req.body.description,
                dateCreated: req.body.dateCreated,
                assignedTo: req.body.assignedId,
                addedBy: req.body.addedBy,
                priority: req.body.priority,
                frequency: req.body.frequency,
                status: req.body.status,
                comments: req.body.comments,
                businessName: req.body.businessName,
            }).exec(function (err, newTask) {
                if (err) {
                    console.error('GET Error: There was a problem retrieving: ' + err);
                    res.status(err.statusCode || 500).json(err);
                }
                else {
                        res.json(task);
                }
            })
        }
    })
});
module.exports = router;