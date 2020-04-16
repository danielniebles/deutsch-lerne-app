const read = require('../models/read');
const create = require('../models/create');
const update = require('../models/update');
const utils = require('../config/utils');

module.exports.readExamples = async (res) => {
    try {
        const response = await read.readColl('examples');
        utils.buildResponse(res, 200, response, "This is the information");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};

module.exports.createExample = async (req, res) => {
    try {
        const response = await create.writeDoc('examples', req); 
        utils.buildResponse(res, 200, response, "Document created");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};

module.exports.updateExample = async (req, res) => {
    try {
        const response = await update.updateDoc('examples', req); 
        utils.buildResponse(res, 200, response, "Document updated");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};