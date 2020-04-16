//app instance
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const verbs = require('./routes/verbs');
const nouns = require('./routes/nouns');
const adjectives = require('./routes/adjectives');
const examples = require('./routes/examples');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/verbs', verbs);
app.use('/nouns', nouns);
app.use('/adjectives', adjectives);
app.use('/examples', examples);

module.exports = app;
