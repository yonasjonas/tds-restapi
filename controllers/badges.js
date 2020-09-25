const badges = require('../dbModel/badges.js');

async function get(req, res, next) {
    try {
        const context = {};
        context.badge_number = req.params.badge_number;
        const rows = await badges.find(context);

        if (req.params.badge_number) {
            if (Number.isInteger(req.params.badge_number)) {
                res.status(423).end();
            }
            else if (rows.length === 1) {
                res.status(200).json(rows[0]);
            }
            else {
                res.status(404).end(`Not Found 404\nno records found with a following badge number`, context.badge_number);
            }
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}


module.exports.get = get;