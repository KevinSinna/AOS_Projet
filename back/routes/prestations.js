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
 *        - ServiceID
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
 *         ServiceID:
 *           type: ObjectId
 *           description: Id d'un client
 *         PrestationsID:
 *           type: ObjectId
 *           description: Id d'un prestataire
 *         service:
 *           type: [string]
 *           description: service rendue
 *         date:
 *           type: Date
 *           description: Date de la prestation 
 *         adresse:
 *           type: String
 *           description: Adresse de la prestation 
 *       example:
 *         ClientID: 614b3555ca728a847b99a6d9
 *         PrestatairesID: 614c5b1b853b0d77a38863bb
 *         ServiceID: 61d2eac308550eb6ed39c054
 *         service: plombier
 *         date: 2021:05:05
 *         adresse: 55 rue de la paix
 *         
 */

/**
 * @swagger
 * tags:
 *  name: Prestations
 *  description: Route API prestations -Port 7500 
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
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Prestations'
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
        PrestatairesID: req.body.PrestatairesID,
        ServiceID: req.body.ServiceID,
        date: req.body.date,
        service: req.body.service,
        adresse: req.body.adresse
    })
    try{
        const newPrestaire = await prestation.save();
        res.status(200).json(newPrestaire)
        console.log("Prestation crée!!")
    }catch(err){
        res.send(err)
    }
})
/**
 * @swagger
 * /prestations/{id}:
 *   put:
 *     summary: Modifier les informations d'une prestation
 *     tags: [Prestations]
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema:
 *          type: string
 *          required: true
 *          description: ID du client 
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Prestations'
 *     responses:
 *       201:
 *         description: Information modifié avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestations'
 *       404:
 *         description: Prestation inexistant
 */

router.put("/:id",async (req, res) => {
//Mise a jour des informations
    try{
        await modelprestations.updateOne(
            {_id: req.params.id},
            {$set: {
                ClientID: req.body.ClientID,
                prestationsID: req.body.prestationsID,
                ServiceID: req.body.ServiceID,
                date: req.body.date,
                service: req.body.service
        }}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
})
/**
 * @swagger
 * /prestations/{id}:
 *   delete:
 *     summary: Supprime une prestation correspondant à l'id
 *     tags: [Prestations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Supprime le prestation correspondant à l'id
 *     responses:
 *       200:
 *         description: prestation supprimé 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prestations'
 *       404:
 *         description: prestation non existant
 */
router.delete("/:id",async (req, res) => {
try{
    await modelprestations.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;