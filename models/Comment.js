var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    postID: {
        type    : mongoose.Schema.Types.ObjectId,
        required: true
    },
    authorID: {
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
    tags: {
        type: [String]
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('CommentSchema', CommentSchema);
