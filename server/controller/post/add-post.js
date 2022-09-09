const { addPostQuery } = require('../../database/queries/post');

const addPost = (req, res, next) => {
    const { id } = req.data;
    const { content, date, img } = req.body;

    addPostQuery([ content, date, img, id ])
        .then(() => {
            res.status(200).json({ message: 'added successfully'});
        })
        .catch((error) => {
            next(error)
        });
};

module.exports = {addPost};
