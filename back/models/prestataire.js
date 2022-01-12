const mongoose = require ('mongoose')

const prestatairesSchema = new mongoose.Schema({
  nom:{
    type: String,
    require:true
  },
  prenom:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  motdepasse:{
    type:String,
    require:true
  },
  token:{
    type:String,
    require:true
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
  service:{
    type:[String],
    require:true
  }
})

module.exports = mongoose.model('Prestataires',prestatairesSchema,"Prestataire")