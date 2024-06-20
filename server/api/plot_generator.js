const express = require('express');
const router = express.Router();
const { Plot_Words } = require('../db/models/plot_words');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

function extract_data_vals (data_arr) {
    let extracted_data = [];
    for (let i = 0; i < data_arr.length; i++) {
        extracted_data.push(data_arr[i].dataValues.element);
    }
    return extracted_data;
}

router.get('/get-plot-word', async function(req, res, next) {
    try {
        const word = await Plot_Words.findAll({
            order: db.random(),
            limit: 1
        });
        res.json({
            type: 'plot',
            word: extract_data_vals(word)
        });
        
    } catch (err) {
        next(err);
    }
});

module.exports = router;