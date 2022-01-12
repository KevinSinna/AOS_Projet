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
  date_de_naissance:{
    type: Date
  },
  telephone:{
    type: String,
    require:true
  },
  token:{
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
  email:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Clients',clientSchema,"Client")