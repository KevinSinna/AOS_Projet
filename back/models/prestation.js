const mongoose = require ('mongoose')

const prestationSchema = new mongoose.Schema({
  nomprestataire:{
    type: String,
    require:true
  },
  nomclient:{
    type:String,
    require:true
  },
  service:{
    type:[String],
    require:true
  },
  date:{
      type:String,
      require:true
  }
})

module.exports = mongoose.model('Prestations',prestationSchema,"Prestation")