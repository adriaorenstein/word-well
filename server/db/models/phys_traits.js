const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Phys_Traits = db.define('phys_traits', {
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

module.exports = { Phys_Traits };