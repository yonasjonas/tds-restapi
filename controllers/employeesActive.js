const employeesActive = require('../dbModel/employeesActive.js');

async function get(req, res, next) {
    try {
        // create and object to hold response data
        const context = {};
        const rows = await employeesActive.find(context);

        if (req.params.firstName) {
            if (rows.length > 0) {
                res.status(200).json(rows);
            }
            else {
                res.status(404).end();
            }
        } else if (rows.length === 0) {
            res.status(404).end('no records match');
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}


module.exports.get = get;