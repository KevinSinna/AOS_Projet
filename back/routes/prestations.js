const express = require("express");
// const prestations = require("../models/prestations");
const router = express.Router()
const modelprestations = require('../models/prestation')

/**
 * @swagger
 * components:
 *   schemas:
 *     Prestations:
 *       type: object
 *       required:
 *        - ClientID
 *        - prestationsID
 *        - service
 *        - date
 *        - adresse
 *        - code_postal
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Numéro d'identifiant prestation auto généré 
 *         ClientID:
 *           type: ObjectId
 *           description: Id d'un client
 *         prestationsID:
 *           type: ObjectId
 *           description: Id d'un prestataire
 *         service:
 *           type: [string]
 *           description: Code postale du prestation
 *         date:
 *           type: Date
 *           description: Liste des services proposé par le prestation 
 *         adresse:
 *           type: String
 *           description: Liste des services proposé par le prestation 
 *       example:
 *         id: 4524824653
 *         nom: LaPorte
 *         prenom: Jules
 *         code_postale: 91100
 *         service: plombier
 */

/**
 * @swagger
 * tags:
 *  name: Prestations
 *  description: Route API prestations 
 */

/**
 * @swagger
 * /Prestations:
 *   get:
 *     summary: retourne la liste des prestations
 *     tags: [Prestations]
 *     responses:
 *       201:
 *         description: liste de tous les prestations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestations'
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
/**
 * @swagger
 * /Prestations/{id}:
 *   get:
 *     summary: Retourne la prestation en fonction de l'id
 *     tags: [Prestations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: prestation correspondant à l'id
 *     responses:
 *       200:
 *         description: Information sur le prestation avec l'id renseigné 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prestation'
 *       404:
 *         description: prestations non existant
 */

//Selectionner un seul prestation
router.get('/:id', async (req, res) =>{
    try {
        const prestation = await modelprestations.findById(req.params.id);
        res.status(200).json(prestation)
    } catch (err) {
        res.send(err)
    }
})

/**
 * @swagger
 * /prestations:
 *   post:
 *     summary: crée un nouveau prestataire
 *     tags: [Prestations]
 *     responses:
 *       201:
 *         description: Prestation ajouté avec succée
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestations'
 */

//créer un prestation
router.post("/", async (req, res) => {
    const prestation = new modelprestations({
        ClientID: req.body.ClientID,
        prestationsID: req.body.prestationsID,
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
                prestationsID: req.body.prestationsID,
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