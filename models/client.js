const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const clientSchema = new Schema({
//     // _id: mongoose.Types.ObjectId,
//     ID: String,
//     DATE_INSCRIPTION: String,
//     NOM: String,
//     PRENOM: String,
//     PSEUDO: String,
//     DATE_DE_NAISSANCE: String,
//     ADRESSE: String,
//     VILLE: String,
//     CODE_POSTAL: String
// });

// const Client = mongoose.model('Client',clientSchema);
const testSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    NOM : String
});
const conn = mongoose.createConnection("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/User");

const Test = conn.model('test',testSchema);
module.exports = Test;
