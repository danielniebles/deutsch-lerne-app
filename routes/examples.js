const express = require('express');
const router = express.Router();

const nouns = require('../controllers/examples');

router.get('/all', (req, res) => {
    nouns.readExamples(res)
});

router.post('/write', (req, res) => {
    nouns.createExample(req.body, res)
});

router.post('/update/:id', (req, res) => {
    nouns.updateExampleById(req, res)
})

module.exports = router;