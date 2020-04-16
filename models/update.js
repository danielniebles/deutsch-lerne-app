const db = require('./config');
const utils = require('../config/utils');

const updateDoc = (collection, data) => {
    return new Promise((resolve, reject) => {
        if(data.docId == undefined){
            reject(new utils.MyError({message: 'Document not found', status: 404}));
            return;
        }
        console.log(data.docId)
        const batch = db.batch();
        const dataRef = db.collection(collection).doc(data.docId);
        batch.update(dataRef, data, {merge: true});
        batch.commit()
            .then((response) => resolve(dataRef.docId))
            .catch((err) => reject(new utils.MyError({message: 'Failed to update document', status: 400})))
    })
}
module.exports = {
    updateDoc
}