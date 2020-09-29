const database = require('../services/database.js');
const fetch = require('node-fetch');


async function find(context) {
	//let country_code = "irl"
	const baseQuery =
		`SELECT id, firstname, lastname, badge_number, country_code, job_title.job_title_name "job_title_name", Department.department_name "department_name", start_date, leave_date 
		FROM employee 
		LEFT JOIN job_title 
		ON employee.job_title_code = job_title.job_title_code
		LEFT JOIN department
		ON department.department_code = job_title.department_code`
		;

	let query = baseQuery;
	const binds = {};
	

	
	if (context.department_name) {
		let department_name = context.country_code;
		binds.department_name = department_name;
		query += `\nWHERE Department.department_name = :department_name`;
	}




	const result = await database.simpleRun(query, binds);
	return result.rows;
}

module.exports.find = find;