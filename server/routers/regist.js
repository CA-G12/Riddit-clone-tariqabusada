const { Router } = require('express');

const { signUp, login } = require('../controller/regist/');

const router = Router();

router.post('/sign-up', signUp)
router.post('user/log-in', login)

router.get('/regist', (req, res) => {
    res.send({ message: 'regist route' });
});

module.exports = router;
