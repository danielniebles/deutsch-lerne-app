const express = require('express');
const router = express.Router();

const exercise = require('../controllers/exercise');

router.get('/full/:module', (req, res) => {
    exercise.generateFullExercise(req,res)
});

router.get('/getSingle', (req,res) => {
    exercise.generateSingleExercise(req.query,res)
})
    


module.exports = router;