const express = require('express');
const router = express.Router({});

router.use('/cards', require('./widgets-sub/cards'))
    .use('/info-box', require('./widgets-sub/info-box'));

module.exports = router;