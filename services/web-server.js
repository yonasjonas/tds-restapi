const express = require('express');
const app = express();
const router = require('./router.js');
const basicAuth = require('express-basic-auth')

// BASIC AUTHENTICATION

app.use(basicAuth({
    users: { 'admin': 'pass' }
}))

// below sends us to /api page and next step is handled inside ./router.js
app.use('/api', router);


const initialise = () => {
    app.get('/', function (req, res) {
        res.send('Welcome')
    })
    app.listen(3002);
}


module.exports.initialise = initialise;