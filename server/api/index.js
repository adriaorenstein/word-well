const router = require('express').Router();

router.use('/char_generator', require('./char_generator'));

module.exports = router;