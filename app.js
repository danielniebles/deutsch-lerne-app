//app instance
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const verbs = require('./routes/verbs');
const nouns = require('./routes/nouns');
const adjectives = require('./routes/adjectives');
const examples = require('./routes/examples');
const exercise = require('./routes/exercise');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/verbs', verbs);
app.use('/nouns', nouns);
app.use('/adjectives', adjectives);
app.use('/examples', examples);
app.use('/exercise', exercise);

module.exports = app;


