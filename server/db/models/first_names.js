const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const First_Names = db.define('first_names', {
    element: {
        type: DataTypes.STRING,
        unique: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        isIn: [['male', 'female', 'unisex']]
    }
})

module.exports = { First_Names };