const { addLike } = require('./add-like');
const { addPost, deletePost} = require('./post');
const { signUpQuery } = require('./sign-up');
const { loginQuery } = require('./log-in');
const { addComment, getComments} = require('./comments');
const { getAllPosts } = require('./feed');
const { getUserPosts } = require('./profile');

module.exports = { 
    signUpQuery,
    loginQuery,
    addPost,
    addComment,
    addLike,
    getAllPosts,
    getComments,
    getUserPosts,
    deletePost,
};
