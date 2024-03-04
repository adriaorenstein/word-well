const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Characters = db.define('characters', {
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    phys_descrip: {
        type: DataTypes.TEXT
    },
    char_descrip: {
        type: DataTypes.TEXT
    }
})

module.exports = { Characters };