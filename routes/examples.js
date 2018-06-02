const router = require('express').Router({});

router.get('/blank', (req, res) => {
    res.render('pages/examples/blank', {path: req.originalUrl});
}).get('/sign-in', (req, res) => {
    res.render('pages/examples/sign-in');
}).get('/sign-up', (req, res) => {
    res.render('pages/examples/sign-up');
}).get('/forgot-password', (req, res) => {
    res.render('pages/examples/forgot-password');
}).get('/404', (req, res) => {
    res.render('pages/examples/404');
}).get('/500', (req, res) => {
    res.render('pages/examples/500');
});

module.exports = router;