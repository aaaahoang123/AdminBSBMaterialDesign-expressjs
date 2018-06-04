const express = require('express');
const router = express.Router({});

/**
 * Routing the widgets/cards/* resource
 */
router.use('/cards', express.Router({})
    .get('/basic', (req, res) => {
        res.render('pages/widgets/cards/basic', {path: '/widgets/cards/basic'});
    }).get('/colored', (req, res) => {
        res.render('pages/widgets/cards/colored', {path: '/widgets/cards/colored'});
    }).get('/no-header', (req, res) => {
        res.render('pages/widgets/cards/no-header', {path: '/widgets/cards/no-header'});
    })
);

/**
 * Routing the widgets/info-box/* resource
 */
router.use('/info-box', express.Router({})
    .get('/info-box-1', (req, res) => {
        res.render('pages/widgets/info-box/info-box-1', {path: '/widgets/info-box/info-box-1'});
    }).get('/info-box-2', (req, res) => {
        res.render('pages/widgets/info-box/info-box-2', {path: '/widgets/info-box/info-box-2'});
    }).get('/info-box-3', (req, res) => {
        res.render('pages/widgets/info-box/info-box-3', {path: '/widgets/info-box/info-box-3'});
    }).get('/info-box-4', (req, res) => {
        res.render('pages/widgets/info-box/info-box-4', {path: '/widgets/info-box/info-box-4'});
    }).get('/info-box-5', (req, res) => {
        res.render('pages/widgets/info-box/info-box-5', {path: '/widgets/info-box/info-box-5'});
    })
);

module.exports = router;