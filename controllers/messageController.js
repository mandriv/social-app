var Message = require('../models/Message')

module.exports = {

    find: function(params, callback) {
        Message.find(params, function(err, messages) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, messages);
        })
    },

    findById: function(id, callback) {
        Message.findById(id, function(err, message) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, message);
        })

    },

    create: function(params, callback) {
        Message.create(params, function(err, message) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, message);
        })
    },

    update: function(id, params, callback) {
        Message.findByIdAndUpdate(id, params, {new: true}, function(err, message) {
            if(err) {
                callback(err, null)
                return
            }
            callback(null, message);
        })
    },

    destroy: function(id, callback) {
        Message.findByIdAndRemove(id, function(err) {
            if(err) {
                callback(err)
                return
            }
            callback(null);
        })
    }

}
