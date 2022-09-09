const { addLike } = require('./add-like');
const { addPostQuery, deletePostQuery} = require('./post');
const { signUpQuery } = require('./sign-up');
const { loginQuery } = require('./log-in');
const { addComment, getComments} = require('./comments');
const { getAllPosts } = require('./feed');
const { getUserPosts } = require('./profile');

module.exports = { 
    signUpQuery,
    loginQuery,
    addPostQuery,
    addComment,
    addLike,
    getAllPosts,
    getComments,
    getUserPosts,
    deletePostQuery,
};
