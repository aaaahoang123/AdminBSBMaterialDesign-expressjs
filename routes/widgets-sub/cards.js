const express = require('express');
const router = express.Router({});

router.get('/basic', (req, res) => {
    res.render('pages/widgets/cards/basic', {path: '/widgets/cards/basic'});
}).get('/colored', (req, res) => {
    res.render('pages/widgets/cards/colored', {path: '/widgets/cards/colored'});
}).get('/no-header', (req, res) => {
    res.render('pages/widgets/cards/no-header', {path: '/widgets/cards/no-header'});
});

module.exports = router;