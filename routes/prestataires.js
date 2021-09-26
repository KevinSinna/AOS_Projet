const express = require("express");
const prestataires = require("../models/prestataires");
const router = express.Router()
const modelPrestataires = require('../models/prestataires')

/**
 * @swagger
 * components:
 *  schemas:
 *      Prestataire:
 *          type: object
 *          properties:
 *              id:
 *                  type: int
 *                  description: Identifiant du prestataire
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
 *  descritpions: Route API de la ressource Prestataires
 */

//Selectionner tout les prestataires
router.get('/', async (req, res) => {
    try{
        const prestataires = await modelPrestataires.find();
        res.status(201).json(prestataires);
    }catch (err){
        res.send(err)
    }
})

//Selectionner un seul prestataire
router.get('/:id', async (req, res) =>{
    try {
        const prestataire = await modelPrestataires.findById(req.params.id);
        res.status(200).json(prestataire)
    } catch (err) {
        res.send(err)
    }
})

//créer un prestataire
router.post("/", async (req, res) => {
    const prestataire = new modelPrestataires({
        nom: req.body.nom,
        prenom: req.body.prenom,
        code_postale: req.body.code_postale,
        service: req.body.service
    })
    try{
        const newPrestaire = await prestataire.save();
        res.status(200).json(newPrestaire)
    }catch(err){
        res.send(err)
    }
})

router.put("/:id", (req, res) => {
/*Mise a jour des informations
    try{
        await modelPrestataires.updateOne(
            {_id: req.params.id},
            if(nom!=null){

            }
            {$set: {}
            }
        )
        res.send()
    }catch(err){
        res.send(err)
    }*/
})

router.delete("/:id",async (req, res) => {
try{
    await modelPrestataires.findById(req.params.id).remove()
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;