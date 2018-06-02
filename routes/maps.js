const router = require('express').Router({});

router.get('/google-map', (req, res) => {
    res.render('pages/maps/google-map', {path: req.originalUrl});
}).get('/yandex-map', (req, res) => {
    res.render('pages/maps/yandex-map', {path: req.originalUrl});
}).get('/jvector-map', (req, res) => {
    res.render('pages/maps/jvector-map', {path: req.originalUrl});
});

module.exports = router;