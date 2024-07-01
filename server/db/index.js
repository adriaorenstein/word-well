const { Sequelize } = require('sequelize');

const db_URL = process.env.DATABASE_URL || 'postgres://localhost:5432';

const db = new Sequelize(db_URL /*+ '/word-well'*/, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// await db.authenticate();

module.exports = db;