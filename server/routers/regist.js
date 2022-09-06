const { Router } = require('express');

const { signUp } = require('../controller/regist');

const router = Router();

router.post('/sign-up', signUp)

router.get('/regist', (req, res) => {
    res.send({ message: 'regist route' });
});

module.exports = router;
