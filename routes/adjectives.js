const express = require('express');
const router = express.Router();

const nouns = require('../controllers/adjectives');

router.get('/all', (req, res) => {
    nouns.readAdjs(res)
});

router.post('/write', (req, res) => {
    nouns.createAdj(req.body, res)
});

router.post('/update/:id', (req, res) => {
    nouns.updateAdjById(req, res)
})

module.exports = router;