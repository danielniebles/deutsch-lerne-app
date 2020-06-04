const verbs = require('./verbs')
const utils = require('../config/utils')
const read = require('../models/read')

module.exports.generateExercise =  async (res) => {
    try {
        const exerciseIdV1 = ['01','02','03']
        const exerciseIdV2 = ['04', '05']
        //Verbs
        const responseVerbs = await read.readColl('verbs');
        //Generate Random List
        const randomVerbs = utils.getRandom(responseVerbs, 5);
        //Assign random Id property
        const randomVerbswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomVerbs)
        
        //Adjectives
        const responseAdjs = await read.readColl('adjectives');
        const randomAdjs = utils.getRandom(responseAdjs, 2);
        const randomAdjswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomAdjs)
        //console.log(randomAdjswId)

        //Nouns
        const responseNouns = await read.readColl('nouns');
        const randomNouns = utils.getRandom(responseNouns, 2);
        const randomNounswId = utils.mergeRandomPropFromArray(exerciseIdV1, randomNouns)
        //console.log(randomNounswId)

        const finalExercise = utils.shuffle(randomVerbswId.concat(randomAdjswId).concat(randomNounswId))
        
        utils.buildResponse(res, 200, finalExercise, "This is the exercise");

    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
    
    
}