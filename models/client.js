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
  code_postale:{
    type: Number,
    require:true
  }
})

module.exports = mongoose.model('Clients',clientSchema,"Client")