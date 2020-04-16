const express = require('express');
const router = express.Router();

const nouns = require('../controllers/examples');

router.get('/all', (req, res) => {
    nouns.readExamples(res)
});

router.post('/write', (req, res) => {
    nouns.createExample(req.body, res)
});

router.post('/update', (req, res) => {
    nouns.updateExample(req.body, res)
})

module.exports = router;