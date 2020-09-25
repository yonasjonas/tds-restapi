const database = require('../services/database.js');

const baseQuery =
    `SELECT department_code "department_code",
    department_name "department_name" from department`;

async function find() {
    const result = await database.simpleRun(baseQuery);
    return result.rows;
}

module.exports.find = find;