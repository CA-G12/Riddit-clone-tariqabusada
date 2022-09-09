const { Router } = require('express');

const {addPost, deletePost} = require('../controller/post');

const router = Router();

router.post('/post/add-post', addPost);

router.delete('/post/delete-post/:pId', deletePost);

module.exports = router;
