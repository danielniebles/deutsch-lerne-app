const express = require('express');
const router = express.Router();

const exercise = require('../controllers/exercise');

router.get('/verbs', (req, res) => {
    exercise.generateExercise(res)
});

module.exports = router;