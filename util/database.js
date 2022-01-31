// const MongoClient = require('mongodb').MongoClient;









// const mongoConnect = function(callback) {
//     MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
//         .then(client => {


//             _db = client.db('olisablog')
//             callback();
//         })
//         .catch(err => {
//             console.log(err);
//             throw new Error('DB connection failed...')
//         })
// }
// const getDB = () => {
//     if (_db) {
//         return _db
//     } else {
//         throw new Error('DB connection failed...')
//     }
// }
// exports.mongoConnect = mongoConnect;

// exports.getDB = getDB
//     // module.exports = mongoConnect;