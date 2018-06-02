const router = require('express').Router({});

router.get('/morris', (req, res) => {
    res.render('pages/charts/morris', {path: req.originalUrl});
}).get('/flot', (req, res) => {
    res.render('pages/charts/flot', {path: req.originalUrl});
}).get('/chartjs', (req, res) => {
    res.render('pages/charts/chartjs', {path: req.originalUrl});
}).get('/sparkline', (req, res) => {
    res.render('pages/charts/sparkline', {path: req.originalUrl});
}).get('/jquery-knob', (req, res) => {
    res.render('pages/charts/jquery-knob', {path: req.originalUrl});
});

module.exports = router;