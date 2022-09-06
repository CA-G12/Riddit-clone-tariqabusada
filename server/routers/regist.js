const { Router } = require('express');

const { signUp, login, logOut } = require('../controller/regist/');

const router = Router();

router.post('/sign-up', signUp);
router.post('/user/log-in', login);
router.get('/user/log-out', logOut);

module.exports = router;
