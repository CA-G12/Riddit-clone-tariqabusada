const { Router } = require('express');

const postRouter = require('./post');
const registRouter = require('./regist');
const userRouter = require('./user');

const router = Router();

router.use(postRouter);
router.use(registRouter);
router.use(userRouter);

module.exports = router;
