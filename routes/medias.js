const router = require('express').Router({});

router.get('/image-gallery', (req, res) => {
    res.render('pages/medias/image-gallery', {path: req.originalUrl});
}).get('/carousel', (req, res) => {
    res.render('pages/medias/carousel', {path: req.originalUrl});
});

module.exports = router;