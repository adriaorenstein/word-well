const db = require('../');
const { Sequelize, DataTypes } = require('sequelize');

const Likes_Dislikes = db.define('likes_dislikes', {
    element: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = { Likes_Dislikes };