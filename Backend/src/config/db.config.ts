

import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        seederStorage: 'sequelize',           
        seederStorageTableName: 'SequelizeData'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        seederStorage: 'sequelize',           
        seederStorageTableName: 'SequelizeData',
        logging: false,
    }
};

module.exports = dbConfig;