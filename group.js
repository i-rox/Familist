"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    groupName: {type: String, unique: true},
    users: [{
        type: Schema.ObjectId,
        ref: 'user'
    }],
    tasks: [{
        type: Schema.ObjectId,
        ref: 'task'
    }]
});


module.exports = mongoose.model('group', schema);