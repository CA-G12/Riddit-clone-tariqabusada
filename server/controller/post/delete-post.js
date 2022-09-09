const { deletePostQuery } = require('../../database/queries/post')

const deletePost = (req, res, next) => {
    const { pId } = req.params;
    deletePostQuery( pId )
        .then(() => res.status(200).json({message: 'deleted successfully'}))
        .catch((error) => next(error));
};

module.exports = {deletePost};
