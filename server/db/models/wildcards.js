const db = require('..');
const { Sequelize, DataTypes } = require('sequelize');

const Wildcards = db.define('wildcards', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Wildcards };