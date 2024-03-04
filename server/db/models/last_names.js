const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Last_Names = db.define('last_names', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Last_Names };