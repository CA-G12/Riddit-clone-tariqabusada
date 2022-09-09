const { Router } = require('express');

const {} = require('../controller/user');

const router = Router();

router.get('/user/homepage');

router.get('/user/profile');

module.exports = router;