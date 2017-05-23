var commentController = require('./commentController');
var conversationController = require('./conversationController');
var messageController = require('./messageController');
var postController = require('./postController');
var userController = require('./userController');

module.exports = {
    comment: commentController,
    conversation: conversationController,
    message: messageController,
    post: postController,
    user: userController
}
