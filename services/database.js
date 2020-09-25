const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');
oracledb.initOracleClient({ libDir: 'C:\\oracle' });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function initialise() {
    const pool = await oracledb.createPool(dbConfig.dbConn);
    console.log(pool)
}


module.exports.initialise = initialise;


function simpleRun(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;

        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;

        // getting the information from database
        
        try {
            conn = await oracledb.getConnection();
            const result = await conn.execute(statement, binds, opts);
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });
}

module.exports.simpleRun = simpleRun;

async function close() {
    await oracledb.getPool().close();
}

module.exports.close = close;