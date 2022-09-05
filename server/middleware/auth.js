const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const authrnticator = (req, res, next) => 
{
    const { token } = req.cookie;

    if (!token) 
    {
        res.status(401).json({ message: 'UnAuthenticated !!'});
    } 
    else 
    {
        jwt.verify(token, SECRET, (err, encoded) => 
        {
            if (err) 
            {
                res.status(401).json({ message: 'UnAuthenticated !!' });
            } 
            else 
            {
                next();
            }
        });
    }
};

module.exports = authrnticator;
