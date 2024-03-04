const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/word-well', {
    logging: false
});

module.exports = db;