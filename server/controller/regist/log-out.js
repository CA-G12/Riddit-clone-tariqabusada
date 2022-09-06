const logOut = (req, res) => {
    res.clearCookie('token').send({ message: 'redirect'});
};

module.exports = logOut;
