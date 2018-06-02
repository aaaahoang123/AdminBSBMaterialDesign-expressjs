const router = require('express').Router({});

router.get('/normal-tables', (req, res) => {
    res.render('pages/tables/normal-tables', {path: req.originalUrl});
}).get('/jquery-datatable', (req, res) => {
    res.render('pages/tables/jquery-datatable', {path: req.originalUrl});
}).get('/editable-table', (req, res) => {
    res.render('pages/tables/editable-table', {path: req.originalUrl});
});

module.exports = router;