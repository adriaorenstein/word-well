const router = require('express').Router();

router.use('/char_generator', require('./char_generator'));
router.use('/plot_generator', require('./plot_generator'));

module.exports = router;