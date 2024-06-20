const express = require('express');
const router = express.Router();
const { Plot_Words } = require('../db/models/plot_words');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

router.get('/get-plot-word', async function(req, res, next) {
    try {
        const word = await Plot_Words.findAll({
            order: db.random(),
            limit: 1
        });
        res.json(word[0]);
        
    } catch (err) {
        next(err);
    }
});

module.exports = router;