const database = require('../services/database.js');

async function find(context) {

	const baseQuery =
        `select job_title_code "job_title_code", job_title_name "job_title_name", Department.department_name "department_name" 
        FROM job_title 
        LEFT JOIN Department ON Department.department_code = Job_Title.department_code
        `;

	let query = baseQuery;
    const binds = {};
    
    // if the was a BADGE_NUMBER added to url it will append the below to the sql statetemt
	if (context.department_name) {
		binds.department_name = context.department_name;
        query += `\nWHERE department_name = :department_name`;        
    }
    
	const result = await database.simpleRun(query, binds);
	return result.rows;
}

module.exports.find = find;