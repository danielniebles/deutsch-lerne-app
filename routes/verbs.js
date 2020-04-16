const express = require('express');
const router = express.Router();

const verbs = require('../controllers/verbs');

router.get('/all', (req, res) => {
    verbs.readVerbs(res)
});

router.post('/write', (req, res) => {
    verbs.createVerb(req.body, res)
});

router.post('/update', (req, res) => {
    verbs.updateVerb(req.body, res)
})

module.exports = router;