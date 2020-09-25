// connection settings for db
// dotenv for encoding sensible data

require('dotenv').config()

module.exports = {
    dbConn: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        connectString: process.env.DB_HOST,
        port: process.env.DB_PORT,
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
};