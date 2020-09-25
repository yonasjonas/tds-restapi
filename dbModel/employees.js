const database = require('../services/database.js');
const fetch = require('node-fetch');

function convertToFullCountryName(country_code) {
	Promise.all([
        fetch(`https://restcountries.eu/rest/v2/alpha/irl`).then(res => res.json())
    ])
        .then(function (data) {
            return data[0].name;
        }).catch(function (error) {
            console.log(error);
        });
	
};

async function find(context) {
	//let country_code = "irl"
	const baseQuery =
		`SELECT id, firstname, lastname, badge_number, country_code, job_title.job_title_name "job_title_name", Department.department_name "department_name", start_date, leave_date 
		FROM employee 
		INNER JOIN job_title 
		ON employee.job_title_code = job_title.job_title_code
		INNER JOIN department
		ON department.department_code = job_title.department_code`
		;

	let query = baseQuery;
	const binds = {};
	//let country_code = context.country_code;
	//console.log("country_code1", country_code)
	//binds.country_code = convertToFullCountryName(country_code)
	
	if (context.department_name) {
		//let country_code = context.country_code;
		binds.department = context.department_name;
		query = `\nWHERE department_name = :department_name`;
	}




	const result = await database.simpleRun(query, binds);

	return result.rows;
}

module.exports.find = find;