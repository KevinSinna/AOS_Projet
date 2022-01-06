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
  code_postal:{
    type: Number,
    require:true
  },
  service:{
    type:[String],
    require:true
  }
})

module.exports = mongoose.model('Prestataires',prestatairesSchema,"Prestataire")