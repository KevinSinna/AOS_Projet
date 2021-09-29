const express = require("express");
const { ClientSession } = require("mongodb");
// const clients = require("../models/clients");
const router = express.Router()
const modelclients = require('../models/client')
@swagger
//Selectionner tout les clients 
router.get('/', async (req, res) => {
    try{
        const clients = await modelclients.find();
        res.status(201).json(clients);
    }catch (err){
        res.send(err)
    }
})

//Selectionner un seul client
router.get('/:id', async (req, res) =>{
    try {
        const client = await modelclients.findById(req.params.id);
        res.status(200).json(client)
    } catch (err) {
        res.send(err)
    }
})

//créer un client
router.post("/", async (req, res) => {
    const client = new modelclients({
        nom: req.body.nom,
        prenom: req.body.prenom,
        code_postale: req.body.code_postale,
        service: req.body.service
    })
    try{
        const newPrestaire = await client.save();
        res.status(200).json(newPrestaire)
    }catch(err){
        res.send(err)
    }
})


router.put("/:id",async (req, res) => {
  //Mise a jour des informations
      try{
           await modelclients.updateOne(
              {_id: req.params.id},
              {$set: {
                nom: req.body.nom ,
              prenom: req.body.prenom ,
              code_postale: req.body.code_postale
            }}
          );
          res.send();
      }catch(err){
          res.send(err)
      }
  })
  
router.delete("/:id",async (req, res) => {
try{
    await modelclients.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;