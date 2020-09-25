const badges = require('../dbModel/badgesActive.js');

async function get(req, res, next) {
    try {
        const context = {};
        const rows = await badges.find(context);

        if (req.params.badge_number) {
            if (rows.length === 1) {
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}


module.exports.get = get;