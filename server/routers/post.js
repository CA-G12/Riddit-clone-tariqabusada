const { Router } = require('express');

const {} = require('../controller/post');

const router = Router();

router.get('/post', (req, res) => {
    res.send('post router')
});

module.exports = router;
