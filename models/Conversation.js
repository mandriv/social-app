var mongoose = require('mongoose');

var ConversationSchema = new mongoose.Schema({
    participants: {
        type    : [mongoose.Schema.Types.ObjectId],
        required: true
    }
})

module.exports = mongoose.model('ConversationSchema', ConversationSchema);
