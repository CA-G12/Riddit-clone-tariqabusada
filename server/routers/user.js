const { Router } = require('express');

const {} = require('../controller/user');

const router = Router();

router.get('/user', (req, res) => {
    res.send('user route');
});

module.exports = router;