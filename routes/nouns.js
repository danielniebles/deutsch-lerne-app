const express = require('express');
const router = express.Router();

const nouns = require('../controllers/nouns');

router.get('/all', (req, res) => {
    nouns.readNouns(res)
});

router.post('/write', (req, res) => {
    nouns.createNoun(req.body, res)
});

router.post('/update/:id', (req, res) => {
    nouns.updateNounById(req, res)
})

module.exports = router;