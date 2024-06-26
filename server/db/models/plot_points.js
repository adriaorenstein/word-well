const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Plot_Points = db.define('plot_points', {
    element: {
        type: DataTypes.TEXT,
        unique: true
    },
})

module.exports = { Plot_Points };