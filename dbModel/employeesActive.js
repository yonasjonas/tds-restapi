const database = require('../services/database.js');

async function find(context) {

	const baseQuery =
		`SELECT id "id", firstname "firstname", leave_date "leave_date", lastname FROM employee WHERE leave_date IS NULL OR TO_DATE(leave_date) < CURRENT_DATE  `;

	let query = baseQuery;
	const binds = {};
	const result = await database.simpleRun(query, binds);
	return result.rows;
}

module.exports.find = find;