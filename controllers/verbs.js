//CRUD
const read = require('../models/read');
const create = require('../models/create');
const update = require('../models/update');
const utils = require('../config/utils');

module.exports.readVerbs = async (res) => {
    try {
        const response = await read.readColl('verbs');
        utils.buildResponse(res, 200, response, "This is the information from other pc");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};

module.exports.createVerb = async (req, res) => {
    try {
        const response = await create.writeDoc('verbs', req); 
        utils.buildResponse(res, 200, response, "Document created");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};

module.exports.updateVerb = async (req, res) => {
    try {
        const response = await update.updateDoc('verbs', req); 
        utils.buildResponse(res, 200, response, "Document updated");
    } catch (error) {
        console.log(error);
        utils.buildResponse(res, error.status, error.message)
    }
};