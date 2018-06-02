const express = require('express');
const router = express.Router({});

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {path: req.originalUrl});
}).get('/typography', (req, res) => {
    res.render('pages/typography', {path: req.originalUrl});
}).get('/helper-classes', (req, res) => {
    res.render('pages/helper-classes', {path: req.originalUrl});
}).use('/widgets', require('./widgets'))
    .use('/ui', require('./ui'))
    .use('/forms', require('./forms'))
    .use('/tables', require('./tables'))
    .use('/medias', require('./medias'))
    .use('/charts', require('./charts'))
    .use('/maps', require('./maps'))
    .use('/examples', require('./examples'));

module.exports = router;
