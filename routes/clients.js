const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = require("../app");

const Test = require("../models/client");
let db = mongoose.connection;

router.get("/clients", function(req, res, next){
  res.send({type:'GET'});
    // Client.find({}).then(function(clients){
    //     res.send(clients);
    // })
});

// router.get('/z', async (req, res) => {
//     const platforms = await Test.find();
//     res.send(platforms);
// });
router.get("/z", function(req, res) {
    var groupe = db
      .collection("Client")
      .find({})
      .toArray(function(err, data) {
        res.send(data);
      });
  });
module.exports = router;