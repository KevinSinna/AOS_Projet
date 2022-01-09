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
  motdepasse:{
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
    rue:{
      type: String,
      require:true,
    },
      ville:{
        type: String,
        require:true
      },
      codePostal:{
        type:Number,
        require:true
      }
    },
  complement_adresse:{
    type: String
  },
  email:{
    type: String,
    require: true
  },
  telephone:{
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Clients',clientSchema,"Client")