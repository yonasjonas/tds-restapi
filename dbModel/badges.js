const database = require('../services/database.js');

async function find(context) {
	
	const baseQuery =
		`SELECT BADGE_NUMBER "BADGE_NUMBER", BADGE_STATUS "BADGE_STATUS", BADGE_EXPIRY_DATE "BADGE_EXPIRY_DATE" FROM badge`;

	let query = baseQuery;
	const binds = {};
	// if the was a BADGE_NUMBER added to url it will append the below to sql statetemt
	if (context.badge_number) {
		binds.badge_number = context.badge_number;
		query += `\nWHERE BADGE_NUMBER = :BADGE_NUMBER`;
	}

	const result = await database.simpleRun(query, binds);
	return result.rows;
}

module.exports.find = find;