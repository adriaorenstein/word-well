const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Plot_Words = db.define('plot_words', {
    element: {
        type: DataTypes.STRING,
        unique: true
    },
})

module.exports = { Plot_Words };