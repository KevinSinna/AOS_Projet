const mongoose = require ('mongoose')

const serviceSchema = new mongoose.Schema({
  PrestataireID:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  },
  Service:{
    type:String,
    require:true
  },
  DateDebut:{
      type:Date,
      require:true
  },
  DateFin:{
    type:Date,
    require:true
},
  Description:{
  type:[String],
  require:true
},
Status:{
  type:String,
  require:true
},
})

module.exports = mongoose.model('Services',serviceSchema,"Service")
