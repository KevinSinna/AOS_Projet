const express = require("express");
const Prestations = require("../models/Prestations");
const router = express.Router()
const modelPrestations = require('../models/Prestations')

/**
 * @swagger
 * components:
 *  schemas:
 *      Prestation:
 *          type: object
 *          properties:
 *              id:
 *                  type: int
 *                  description: Identifiant du Prestation
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
 *  descritpions: Route API de la ressource Prestations
 */

//Selectionner tout les Prestations
router.get('/', async (req, res) => {
    try{
        const Prestations = await modelPrestations.find();
        res.status(201).json(Prestations);
    }catch (err){
        res.send(err)
    }
})

//Selectionner un seul Prestation
router.get('/:id', async (req, res) =>{
    try {
        const Prestation = await modelPrestations.findById(req.params.id);
        res.status(200).json(Prestation)
    } catch (err) {
        res.send(err)
    }
})

//créer un Prestation
router.post("/", async (req, res) => {
    const Prestation = new modelPrestations({
        nom: req.body.nom,
        prenom: req.body.prenom,
        code_postale: req.body.code_postale,
        service: req.body.service
    })
    try{
        const newPrestaire = await Prestation.save();
        res.status(200).json(newPrestaire)
    }catch(err){
        res.send(err)
    }
})

router.put("/:id",async (req, res) => {
//Mise a jour des informations
    try{
        await modelPrestations.updateOne(
            {_id: req.params.id},
            {$set: {nom: req.body.nom ,
            prenom: req.body.prenom ,
            code_postale: req.body.code_postale ,
            service: req.body.service}}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
})

router.delete("/:id",async (req, res) => {
try{
    await modelPrestations.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;