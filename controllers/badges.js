const badges = require('../dbModel/badges.js');

async function get(req, res, next) {
    try {
        const context = {};
        context.badge_number = req.params.badge_number;
        const rows = await badges.find(context);
        let bandge_number_int = parseInt(context.badge_number)

        if (bandge_number_int) {
            if (typeof bandge_number_int === "number") {
                res.status(200).json(rows);
            }
            else {
                res.status(404).end('no badge number matches');
            }
            
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}


module.exports.get = get;