const express = require('express');
const print = require('colorprint');
const helmet = require('helmet');
const databaseConnect = require('./utilits/database');
const session = require('express-session');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');
const apiRoutes = require('./api');
const path = require('path');
const MemoryStore = require('memory-store')(session);

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
    saveUninitialized: true,
    store: new MemoryStore({
        checkPeriod: 86400000
    })
}));

apiRoutes(app);

if(process.env.NODE_ENV === 'production') {
    app.use('/static/', express.static(__dirname + '/client/build/static'));
    app.use('/favicon.ico', express.static(__dirname + '/client/build/favicon.ico'));
    app.use('/manifest.json', express.static(__dirname + '/client/build/manifest.json'));
}

// app.use('/static/', express.static(__dirname + '/client/build/static'));
//     app.use('/favicon.ico', express.static(__dirname + '/client/build/favicon.ico'));
//     app.use('/manifest.json', express.static(__dirname + '/client/build/manifest.json'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });

app.listen(process.env.PORT || 5000, async() => {

    if(process.env.NODE_ENV === 'production') {
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    try {
        await databaseConnect();

        console.log('--[ Server has started ]--');
        console.log('--[ MongoDB has connected ]--');
    } catch (error) {
        console.log(error);

        process.exit();
    }
});