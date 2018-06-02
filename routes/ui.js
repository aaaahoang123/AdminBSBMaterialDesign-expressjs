const router = require('express').Router({});

router.get('/alerts', (req, res) => {
    res.render('pages/ui/alerts', {path: req.originalUrl});
}).get('/animations', (req, res) => {
    res.render('pages/ui/animations', {path: req.originalUrl});
}).get('/badges', (req, res) => {
    res.render('pages/ui/badges', {path: req.originalUrl});
}).get('/breadcrumbs', (req, res) => {
    res.render('pages/ui/breadcrumbs', {path: req.originalUrl});
}).get('/buttons', (req, res) => {
    res.render('pages/ui/buttons', {path: req.originalUrl});
}).get('/collapse', (req, res) => {
    res.render('pages/ui/collapse', {path: req.originalUrl});
}).get('/colors', (req, res) => {
    res.render('pages/ui/colors', {path: req.originalUrl});
}).get('/dialogs', (req, res) => {
    res.render('pages/ui/dialogs', {path: req.originalUrl});
}).get('/icons', (req, res) => {
    res.render('pages/ui/icons', {path: req.originalUrl});
}).get('/labels', (req, res) => {
    res.render('pages/ui/labels', {path: req.originalUrl});
}).get('/list-group', (req, res) => {
    res.render('pages/ui/list-group', {path: req.originalUrl});
}).get('/media-object', (req, res) => {
    res.render('pages/ui/media-object', {path: req.originalUrl});
}).get('/modals', (req, res) => {
    res.render('pages/ui/modals', {path: req.originalUrl});
}).get('/notifications', (req, res) => {
    res.render('pages/ui/notifications', {path: req.originalUrl});
}).get('/pagination', (req, res) => {
    res.render('pages/ui/pagination', {path: req.originalUrl});
}).get('/preloaders', (req, res) => {
    res.render('pages/ui/preloaders', {path: req.originalUrl});
}).get('/progressbars', (req, res) => {
    res.render('pages/ui/progressbars', {path: req.originalUrl});
}).get('/range-sliders', (req, res) => {
    res.render('pages/ui/range-sliders', {path: req.originalUrl});
}).get('/sortable-nestable', (req, res) => {
    res.render('pages/ui/sortable-nestable', {path: req.originalUrl});
}).get('/tabs', (req, res) => {
    res.render('pages/ui/tabs', {path: req.originalUrl});
}).get('/thumbnails', (req, res) => {
    res.render('pages/ui/thumbnails', {path: req.originalUrl});
}).get('/tooltips-popovers', (req, res) => {
    res.render('pages/ui/tooltips-popovers', {path: req.originalUrl});
}).get('/waves', (req, res) => {
    res.render('pages/ui/waves', {path: req.originalUrl});
});

module.exports = router;