const express = require('express');
const print = require('colorprint');
const helmet = require('helmet');
const databaseConnect = require('./utilits/database');
const session = require('express-session');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');
const apiRoutes = require('./api');

const app = express();

app.use((req, rse, next) => {
    print.notice(`${req.method} --> ${req.url}`);

    next();
});

app.use(bodyParser.json());
app.use(helmet());
app.use(session({
    secret: keys.session,
    resave: false,
    saveUninitialized: true
}));

apiRoutes(app);

app.listen(process.env.PORT || 5000, async() => {
    try {
        await databaseConnect();

        console.log('--[ Server has started ]--');
        console.log('--[ MongoDB has connected ]--');
    } catch (error) {
        console.log(error);

        process.exit();
    }
});