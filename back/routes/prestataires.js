const express = require("express");
const prestataires = require("../models/prestataire");
const router = express.Router()
const modelPrestataires = require('../models/prestataire')

/**
 * @swagger
 * components:
 *   schemas:
 *     Prestataires:
 *       type: object
 *       required:
 *        - nom
 *        - prenom
 *        - code_postal
 *        - service
 *       properties:
 *         id:
 *           type: number
 *           description: Numéro d'identifiant prestataire auto généré 
 *         nom:
 *           type: string
 *           description: Nom d'un prestataire
 *         prenom:
 *           type: string
 *           description: Prenom d'un prestataire
 *         code_postal:
 *           type: string
 *           description: Code postale du prestataire
 *         service:
 *           type: [string]
 *           description: Liste des services proposé par le prestataire 
 *       example:
 *         id: 4524824653
 *         nom: LaPorte
 *         prenom: Jules
 *         code_postal: 91100
 *         service: plombier
 */

/**
 * @swagger
 * tags:
 *  name: Prestataires
 *  description: Route API Prestataires 
 */

/**
 * @swagger
 * /prestataires:
 *   get:
 *     summary: retourne la liste des prestataires
 *     tags: [Prestataires]
 *     responses:
 *       201:
 *         description: liste de tous les prestataires
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestataires'
 */

//Selectionner tout les prestataires,  peut etre une methode de recherche par service 
router.get('/', async (req, res) => {
    try{
        const prestataires = await modelPrestataires.find().select(['nom','prenom','code_postal','service']);
        res.status(201).json(prestataires);
    }catch (err){
        res.send(err)
    }
})

/**
 * @swagger
 * /prestataires/{id}:
 *   get:
 *     summary: Retourne le prestataire en fonction de l'id
 *     tags: [Prestataires]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Prestataire correspondant à l'id
 *     responses:
 *       200:
 *         description: Information sur le prestataire avec l'id renseigné 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prestataires'
 *       404:
 *         description: Prestataires non existant
 */

//Selectionner un seul prestataire
router.get('/:id', async (req, res) =>{
    try {
        const prestataire = await modelPrestataires.findById(req.params.id);
        res.status(200).json(prestataire)
    } catch (err) {
        res.send(err)
    }
})
/**
 * @swagger
 * /prestataires/service/{service}:
 *   get:
 *     summary: Retourne la liste des prestataires proposant le service
 *     tags: [Prestataires]
 *     parameters:
 *       - in: path
 *         name: service
 *         schema:
 *           type: string
 *         required: true
 *         description: Prestataire proposant un service
 *     responses:
 *       200:
 *         description: Prestataire proposant un servcie
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prestataires'
 *       404:
 *         description: Prestataires non existant
 */

//recupere les prestataire proposant ce service
router.get('/service/:service', async (req, res) =>{
    try {
        const prestataire = await modelPrestataires.find({service: req.params.service}).select(['nom','prenom','code_postal','service']);
        res.status(200).json(prestataire)
    } catch (err) {
        res.send(err)
    }
})

/**
 * @swagger
 * /prestataires:
 *   post:
 *     summary: crée un nouveau prestataire
 *     tags: [Prestataires]
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Prestataires'
 *     responses:
 *       201:
 *         description: Prestataire ajouté avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestataires'
 */

//créer un prestataire
router.post("/", async (req, res) => {
    const prestataire = new modelPrestataires({
        nom: req.body.nom,
        prenom: req.body.prenom,
        code_postal: req.body.code_postal,
        service: req.body.service
    })
    try{
        const newPrestaire = await prestataire.save();
        res.status(200).json(newPrestaire)
    }catch(err){
        res.send(err)
    }
})

/**
 * @swagger
 * /prestataires/{id}:
 *   put:
 *     summary: Modifier les informations d'un prestataire
 *     tags: [Prestataires]
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema:
 *          type: string
 *          required: true
 *          description: ID du prestataire 
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Prestataires'
 *     responses:
 *       201:
 *         description: Information modifié avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prestataires'
 *       404:
 *         description: Prestataire inexistant
 */


router.put("/:id",async (req, res) => {
//Mise a jour des informations
    try{
        await modelPrestataires.updateOne(
            {_id: req.params.id},
            {$set: {nom: req.body.nom ,
            prenom: req.body.prenom ,
            code_postal: req.body.code_postal ,
            service: req.body.service}}
        );
        res.send();
    }catch(err){
        res.status(404).send(err)
    }
})

/**
 * @swagger
 * /prestataires/{id}:
 *   delete:
 *     summary: Supprime le prestataire correspondant à l'id
 *     tags: [Prestataires]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Supprime le prestataire correspondant à l'id
 *     responses:
 *       200:
 *         description: Prestataire supprimé 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prestataires'
 *       404:
 *         description: Prestataire non existant
 */

router.delete("/:id",async (req, res) => {
try{
    await modelPrestataires.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})

module.exports = router;