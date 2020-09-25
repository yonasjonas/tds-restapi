const webServer = require('./services/web-server.js');
const database = require('./services/database.js');

require('dotenv').config()

async function startup() {
    console.log('Starting application');

    try {
        console.log('Initializing database module');
        await database.initialise();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    try {
        console.log('Initializing web server module');
        await webServer.initialise();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}



startup();