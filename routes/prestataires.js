const express = require("express");
const prestataires = require("../models/prestataires");
const router = express.Router()
const modelPrestataires= require('../models/prestataires')

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
 *  name: Prestations
 *  descritpions: Route API de la ressource Prestataires
 */

router.get("/", async (req, res) => {
    try{
        const prestataires = await modelPrestataires.find();
        res.status(201).json(prestataires);
    }catch (err){
        res.send(err)
    }
})

router.get("/:id", (req, res) =>{
    //Affiche un prestataire (avoir le détail)
    try {
        res.status(200).json(modelPrestataires)
    } catch (err) {
        res.send(err)
    }
})

router.put("/", (req, res) => {
    //ajoute un prestataire
    res.status(200)
})

router.post("/:id", (req, res) => {
    // on va aller chercher l'élément et modifier un ou plusieurs éléments
    res.status(200).send(console.log("Information mise à jour"))
})

router.delete("/:id", (req, res) => {
    //const prestataire = requette
    res.send(console.log("Prestataire Supprimé"))
})

module.exports = router;