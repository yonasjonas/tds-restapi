const employees = require('../dbModel/employees.js');

async function get(req, res, next) {
    try {

        // create and object to hold response data
        const context = {};
        // linking department name from url to the sql request
        context.department_name = req.params.department_name;
        const dep_name = context.department_name
        // searching for matching records
        const rows = await employees.find(context);
        console.log("rows", rows)
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