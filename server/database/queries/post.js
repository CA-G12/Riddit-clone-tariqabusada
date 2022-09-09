const connection = require('../config/connection');

const addPostQuery = (data) => connection
        .query = ('Insert into posts(content, date, img, user_id) VALUES ($1,$2,$3,$4) RETURNING *', data );

const deletePostQuery = ( postId ) => connection
        .query = ('DELETE FROM posts WHERE id = ($1) RETURNING *', postId);

module.exports = { addPostQuery, deletePostQuery };
