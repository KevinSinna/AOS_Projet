const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    ID: String,
    DATE_INSCRIPTION: String,
    NOM: String,
    PRENOM: String,
    PSEUDO: String,
    DATE_DE_NAISSANCE: String,
    ADRESSE: String,
    VILLE: String,
    CODE_POSTAL: String
});

module.exports = mongoose.model('Client', clientSchema);
