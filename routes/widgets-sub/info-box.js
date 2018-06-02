const router = require('express').Router({});

router.get('/info-box-1', (req, res) => {
    res.render('pages/widgets/info-box/info-box-1', {path: '/widgets/info-box/info-box-1'});
}).get('/info-box-2', (req, res) => {
    res.render('pages/widgets/info-box/info-box-2', {path: '/widgets/info-box/info-box-2'});
}).get('/info-box-3', (req, res) => {
    res.render('pages/widgets/info-box/info-box-3', {path: '/widgets/info-box/info-box-3'});
}).get('/info-box-4', (req, res) => {
    res.render('pages/widgets/info-box/info-box-4', {path: '/widgets/info-box/info-box-4'});
}).get('/info-box-5', (req, res) => {
    res.render('pages/widgets/info-box/info-box-5', {path: '/widgets/info-box/info-box-5'});
});

module.exports = router;