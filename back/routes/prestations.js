const express = require("express");
// const prestations = require("../models/prestations");
const router = express.Router()
const modelprestations = require('../models/prestation')

/**
 * @swagger
 * components:
 *  schemas:
 *      prestation:
 *          type: object
 *          properties:
 *              id:
 *                  type: int
 *                  description: Identifiant du prestation
 *              service:
 *                  type: string
 *                  description: Service Proposé
 *          example:
 *              id: 1
 *              service: plombier
 */

/**
 * @swagger
 * tags:
 *  name: Prestatataires
 *  descritpions: Route API de la ressource prestations
 */

//Selectionner tout les prestations
router.get('/', async (req, res) => {
    try{
        const prestations = await modelprestations.find();
        res.status(201).json(prestations);
    }catch (err){
        res.send(err)
    }
})

//Selectionner un seul prestation
router.get('/:id', async (req, res) =>{
    try {
        const prestation = await modelprestations.findById(req.params.id);
        res.status(200).json(prestation)
    } catch (err) {
        res.send(err)
    }
})

//créer un prestation
router.post("/", async (req, res) => {
    const prestation = new modelprestations({
        ClientID: req.body.ClientID,
        PrestatairesID: req.body.PrestatairesID,
        date: req.body.date,
        service: req.body.service
    })
    try{
        const newPrestaire = await prestation.save();
        res.status(200).json(newPrestaire)
        console.log("Prestation crée!!")
    }catch(err){
        res.send(err)
    }
})

router.put("/:id",async (req, res) => {
//Mise a jour des informations
    try{
        await modelprestations.updateOne(
            {_id: req.params.id},
            {$set: {
                ClientID: req.body.ClientID,
                PrestatairesID: req.body.PrestatairesID,
                date: req.body.date,
                service: req.body.service
        }}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
})

router.delete("/:id",async (req, res) => {
try{
    await modelprestations.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;