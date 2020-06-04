const db = require('./config');
const {MyError} = require('../config/utils');

const updateDoc = (collection, data) => {
    return new Promise((resolve, reject) => {
        if(data.params.id == undefined){
            reject(new MyError({message: 'Document not found', status: 404}));
            return;
        }
        console.log(data.params.id)
        const batch = db.batch();
        const dataRef = db.collection(collection).doc(data.params.id);
        batch.update(dataRef, data.body, {merge: true});
        batch.commit()
            .then((response) => resolve(dataRef.docId))
            .catch((err) => reject(new MyError({message: 'Failed to update document', status: 400})))
    })
}
module.exports = {
    updateDoc
}