const db = require('./config');
const MyError = require('../config/utils');

const writeDoc = (collection, data) => {
    return new Promise((resolve, reject) => {
        const batch = db.batch();
        const dataRef = db.collection(collection).doc();
        data['docId'] = dataRef.id;
        batch.set(dataRef, data);
        batch.commit()
            .then((response) => resolve(dataRef.id))
            .catch((err) => reject(new MyError({message: 'Failed to create document', status: 400})))
    })
}

module.exports = {
    writeDoc
}