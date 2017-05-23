var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    senderID: {
        type    : mongoose.Schema.Types.ObjectId,
        required: true
    },
    conversationID: {
        type    : mongoose.Schema.Types.ObjectId,
        required: true
    },
    points: {
        type    : Number,
        default : 0
    },
    content: {
        type    : String,
        default : ""
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('MessageSchema', MessageSchema);
