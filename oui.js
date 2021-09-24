const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
// mongoose.connect("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/User").then(() => console.log("Connexion à MongoDB réussie !"))
// .catch(() => console.log("Connexion à MongoDB échouée !"));

var conn = mongoose.createConnection("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/User")
// var conn2 = mongoose.createConnection('mongodb://localhost/db2');
// var conn= mongoose.createConnection('mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/User');
mongoose.Promise = global.Promise;
var Schema = new mongoose.Schema({})
var model1 = conn.model('User', Schema);
model1.find({}, function() {
   console.log("this will print out last");
});
var ModelA    = conn.model('test', new mongoose.Schema({
    NOM : { type : String, default : 'model in testA database' }
  }));
  console.log(ModelA);
// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/clients', require('./routes/clients'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});