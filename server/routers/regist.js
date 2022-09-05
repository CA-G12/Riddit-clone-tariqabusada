const { Router } = require('express');

const {} = require('../controller/regist');

const router = Router();

router.get('/regist', (req, res) => {
    res.send('regist route');
});

module.exports = router;
