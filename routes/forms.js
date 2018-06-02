const router = require('express').Router({});

router.get('/basic-form-elements', (req, res) => {
    res.render('pages/forms/basic-form-elements', {path: req.originalUrl});
}).get('/advanced-form-elements', (req, res) => {
    res.render('pages/forms/advanced-form-elements', {path: req.originalUrl});
}).get('/form-examples', (req, res) => {
    res.render('pages/forms/form-examples', {path: req.originalUrl});
}).get('/form-validation', (req, res) => {
    res.render('pages/forms/form-validation', {path: req.originalUrl});
}).get('/form-wizard', (req, res) => {
    res.render('pages/forms/form-wizard', {path: req.originalUrl});
}).get('/editors', (req, res) => {
    res.render('pages/forms/editors', {path: req.originalUrl});
});

module.exports = router;