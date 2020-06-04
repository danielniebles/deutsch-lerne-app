const express = require('express');
const router = express.Router();

const verbs = require('../controllers/verbs');

router.get('/all', (req, res) => {
    verbs.readVerbs(res)
});

router.get('/getById', (req, res) => {
    verbs.readVerbById(req.query, res)
});

router.post('/write', (req, res) => {
    verbs.createVerb(req.body, res)
});

router.post('/update/:id', (req, res) => {
    verbs.updateVerbById(req, res)
})

module.exports = router;