var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type    : String,
        required: true,
        unique  : true
    },
    email: {
        type    : String,
        required: true,
        unique  : true
    },
    password: {
        type    : String,
        required: true,
    },
    picturePath: {
        type: String,
        default: 'default-avatar'
    },
    description: {
        type: String
    },
    dateJoined: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('UserSchema', UserSchema);
