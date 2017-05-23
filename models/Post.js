var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
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
        type : [String]
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('PostSchema', PostSchema);
