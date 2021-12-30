const mongoose = require ('mongoose')

const serviceSchema = new mongoose.Schema({
  PrestatairesID:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  },
  service:{
    type: String
  },
  description:{
    type: String
  },
  date:{
    type:[Date],
    require:true
  }
})

module.exports = mongoose.model('Services',serviceSchema,"Services")