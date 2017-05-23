var Conversation = require('../models/Conversation')

module.exports = {

    find: function(params, callback) {
        Conversation.find(params, function(err, conversations) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, conversations);
        })
    },

    findById: function(id, callback) {
        Conversation.findById(id, function(err, conversation) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, conversation);
        })

    },

    create: function(params, callback) {
        Conversation.create(params, function(err, conversation) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, conversation);
        })
    },

    update: function(id, params, callback) {
        Conversation.findByIdAndUpdate(id, params, {new: true}, function(err, conversation) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, conversation);
        })
    },

    destroy: function(id, callback) {
        Conversation.findByIdAndRemove(id, function(err) {
            if(err) {
                callback(err)
                return
            }
            callback(null);
        })
    }

}
