const mongoose = require('mongoose');

// var postsSchema = mongoose.Schema({
//     //id: {type: mongoose.Schema.Types.ObjectId, required: true},
//     title: {type: String},
//     body : {type: String}

// });

// var tasksSchema = mongoose.Schema({
//     //id: {type: mongoose.Schema.Types.ObjectId, required: true},
//     title: {type: String},
//     completed : {type: Boolean}

// });

let userSchema = mongoose.Schema({
    name : String,
    email : String,
    street : String,
    city : String,
    zipcode : Number,
    tasks :
        [{ title:  String,
        completed : Boolean
            }],
    posts :
        [{ title: String,
        body : String}]

});

module.exports = mongoose.model('users',userSchema)