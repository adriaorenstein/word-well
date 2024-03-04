const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Skills = db.define('skills', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Skills };