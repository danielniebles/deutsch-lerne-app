const express = require('express');
const router = express.Router();

const nouns = require('../controllers/adjectives');

router.get('/all', (req, res) => {
    nouns.readAdjs(res)
});

router.post('/write', (req, res) => {
    nouns.createAdj(req.body, res)
});

router.post('/update', (req, res) => {
    nouns.updateAdj(req.body, res)
})

module.exports = router;