const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Char_Traits = db.define('char_traits', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Char_Traits };