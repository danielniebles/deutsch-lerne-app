const db = require('./config');
const MyError = require('../config/utils');

const readColl = (collection) => {
    const dataRef = db.collection(collection);
    return new Promise((resolve, reject) => {
        dataRef.get()
            .then(
                (snapshot) => {
                    if(snapshot.empty) {
                        reject(new MyError({message: 'Collection not found', status: 404}));
                        return;
                    }
                    const docs = [];
                    snapshot.forEach((doc) => {
                        docs.push(doc.data());
                    })
                    resolve(docs);
                }
            ).catch((err) => reject(new MyError({message: 'Error consulting DB', status: 400})))
    })
};

module.exports = { readColl };