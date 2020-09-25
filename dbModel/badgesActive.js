const database = require('../services/database.js');

const baseQuery =
    `SELECT BADGE_NUMBER "BADGE_NUMBER",
    BADGE_STATUS "BADGE_STATUS",
    BADGE_EXPIRY_DATE "BADGE_EXPIRY_DATE"   
    from badge WHERE TO_DATE(BADGE_EXPIRY_DATE) > CURRENT_DATE`;

async function find() {
    const result = await database.simpleRun(baseQuery);
    return result.rows;
}

module.exports.find = find;