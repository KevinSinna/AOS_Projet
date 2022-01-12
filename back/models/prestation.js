const mongoose = require ('mongoose')

const prestationSchema = new mongoose.Schema({
  ClientID:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  },
  PrestatairesID:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  },
  service:{
    type:String,
    require:true
  },
  date:{
      type:Date,
      require:true
  },
  adresse:{
      type:String,
      require:true
  },

})

module.exports = mongoose.model('Prestations',prestationSchema,"Prestation")