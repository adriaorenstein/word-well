const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Motivators = db.define('motivators', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Motivators };