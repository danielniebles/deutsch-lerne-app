const verbs = require('./verbs')
const utils = require('../config/utils')
const read = require('../models/read')

module.exports.generateFullExercise = async (req, res) => {
    try {
        if (req.params.module === "all") {
            const exerciseIdV1 = ['01', '02', '03']
            const exerciseIdV2 = ['04', '05']
            //Verbs
            const responseVerbs = await read.readColl('verbs');
            //Generate Random List
            const randomVerbs = utils.getRandom(responseVerbs, 1);
            //Assign random Id property
            const randomVerbswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomVerbs)

            //Adjectives
            const responseAdjs = await read.readColl('adjectives');
            const randomAdjs = utils.getRandom(responseAdjs, 1);
            const randomAdjswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomAdjs)

            //Nouns
            const responseNouns = await read.readColl('nouns');
            const randomNouns = utils.getRandom(responseNouns, 1);
            const randomNounswId = utils.mergeRandomPropFromArray(exerciseIdV1, randomNouns)


            const temp = utils.shuffle(randomVerbswId.concat(randomAdjswId).concat(randomNounswId))

            const finalExercise = []
            temp.forEach((elm, index) => {
                const dummyVar = Object.assign(elm, { exerciseid: index })
                finalExercise.push(dummyVar)
            })

            utils.buildResponse(res, 200, finalExercise, "This is the exercise")
        } else if (req.params.module === "verbs") {
            const exerciseIdV2 = ['04', '05']
            //Verbs
            const responseVerbs = await read.readColl('verbs');
            //Generate Random List
            const randomVerbs = utils.getRandom(responseVerbs, 5);
            //Assign random Id property
            const randomVerbswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomVerbs)

            const finalExercise = []
            randomVerbswId.forEach((elm, index) => {
                const dummyVar = Object.assign(elm, { exerciseid: index })
                finalExercise.push(dummyVar)
            })
            utils.buildResponse(res, 200, finalExercise, "This is the exercise")
        } else if (req.params.module === "nouns") {

            const exerciseIdV1 = ['01', '02', '03']

            //Nouns
            const responseNouns = await read.readColl('nouns');
            const randomNouns = utils.getRandom(responseNouns, 1);
            const randomNounswId = utils.mergeRandomPropFromArray(exerciseIdV1, randomNouns)

            const finalExercise = []
            randomNounswId.forEach((elm, index) => {
                const dummyVar = Object.assign(elm, { exerciseid: index })
                finalExercise.push(dummyVar)
            })
            utils.buildResponse(res, 200, finalExercise, "This is the exercise")

        } else if (req.params.module === "adjs") {

            const exerciseIdV2 = ['04', '05']
            //Adjectives
            const responseAdjs = await read.readColl('adjectives');
            const randomAdjs = utils.getRandom(responseAdjs, 5);
            const randomAdjswId = utils.mergeRandomPropFromArray(exerciseIdV2, randomAdjs)

            const finalExercise = []
            randomAdjswId.forEach((elm, index) => {
                const dummyVar = Object.assign(elm, { exerciseid: index })
                finalExercise.push(dummyVar)
            })
            utils.buildResponse(res, 200, finalExercise, "This is the exercise")

        }

    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
}

module.exports.generateSingleExercise = async (req, res) => {
    console.log(req.id)
    console.log(req.module)
    try {
        const responseCollection = await read.readColl(req.module)
        const randomized = utils.getRandom(responseCollection, 5)
        const auxArray = [req.id]
        const randomwId = utils.mergeRandomPropFromArray(auxArray, randomized)

        const finalExercise = []
        randomwId.forEach((elm, index) => {
            const dummyVar = Object.assign(elm, { exerciseid: index })
            finalExercise.push(dummyVar)
        })

        utils.buildResponse(res, 200, finalExercise, "This is the exercise")
    }
    catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }

}