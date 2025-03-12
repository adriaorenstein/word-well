const { Sequelize } = require('sequelize');

const db_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/word-well';

const db = new Sequelize(db_URL /*+ '/word-well'*/, {
    logging: false,
    dialectOptions: {
        // FOR HEROKU: uncomment this
        // ssl: {
        //     require: true,
        //     rejectUnauthorized: false
        // }
    }
});

// await db.authenticate();

module.exports = db;