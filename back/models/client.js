const mongoose = require ('mongoose')

const clientSchema = new mongoose.Schema({
  nom:{
    type: String,
    require:true
  },
  prenom:{
    type:String,
    require:true
  },
  code_postal:{
    type: Number,
    require:true
  },
  date_de_naissance:{
    type: Date
  },
  pseudo:{
    type: String
  },
  adresse:{
    type: String,
    require: true
  },
  complement_adresse:{
    type: String
  },
  adresse_mail:{
    type: String,
    require: true
  },
  telephone:{
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Clients',clientSchema,"Client")