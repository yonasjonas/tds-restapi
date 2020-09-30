const employees = require('../dbModel/employees.js');
const fetch = require('node-fetch');


async function convertToFullCountryName(country_code) {
	Promise.all([
        fetch(`https://restcountries.eu/rest/v2/alpha/${country_code}`).then(res => res.json())
    ])
        .then(function (data) {
            return [data];
        }).catch(function (error) {
            console.log(error);
        });
	
};

async function get(req, res, next) {
    try {

        // create and object to hold response data
        const context = {};
        // linking department name from url to the sql request
        context.department_name = req.params.department_name;
        const dep_name = context.department_name
        // searching for matching records
        const rows = await employees.find(context);
       
        
        countryName = await rows.map(item => {            
            const fullCountryName = convertToFullCountryName(rows.map(getShortName));
            return fullCountryName;
        });

        if (dep_name) {
            if (typeof dep_name === "string") {
                res.status(200).json(rows);
            } else {
                res.status(422).end('not valid data type');
            }
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}

module.exports.get = get;