const express = require("express");
// const prestataires = require("../models/prestataire");
const router = express.Router()
const modelPrestataires = require('../models/prestataire')
//Crypte mdp
const bcrypt = require("bcrypt");
// Token de connexion
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { find, findOne } = require("../models/prestataire");
const prestataire = require("../models/prestataire");

/**
 * @swagger
 * components:
 *   schemas:
 *     Connexion:
 *       type: object
 *       required:
 *        - email
 *        - motdepasse 
 *       properties:
 *         email:
 *           type: string
 *           description: email d'un prestataire
 *         motdepasse:
 *           type: string
 *           description: mot de passe d'un prestataire
 *       example:
 *         email: jules.laporte@gmail.com
 *         motdepasse : Mypassword       
 *     Prestataires:
 *       type: object
 *       required:
 *        - nom
 *        - prenom
 *        - email 
 *        - adresse
 *        - service
 *       properties:
 *         nom:
 *           type: string
 *           description: Nom d'un prestataire
 *         prenom:
 *           type: string
 *           description: Prenom d'un prestataire
 *         email:
 *           type: string
 *           description: Email d'un prestataire
 *         motdepasse:
 *           type: string
 *           description: Mot de passe d'un prestataire  
 *         adresse:
 *           type: object
 *           description: Adresse du prestataire
 *         service:
 *           type: [string]
 *           description: Liste des services proposé par le prestataire 
 *       example:
 *         id: 4524824653
 *         nom: LaPorte
 *         prenom: Jules
 *         email: jules.laporte@gmail.com
 *         motdepasse : Mypassword 
 *         adresse:
 *          rue: 42 rue de la gare
 *          ville: Evry
 *          codePostal: 91100
 *         service: plombier
 */

/**
 * @swagger
 * tags:
 *  name: Prestataires
 *  description: Route API Prestataires -Port 5000
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
        const prestataires = await modelPrestataires.find().select(['nom','prenom','adresse','service']);
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
        email: req.body.email,
        motdepasse: req.body.motdepasse,
        adresse: req.body.adresse,
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
 *     summary: Met à jour les informations du prestataires en fonction de l'id
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

router.put("/:id",async (req, res) => {
//Mise a jour des informations
    try{
        await modelPrestataires.updateOne(
            {_id: req.params.id},
            {$set: {nom: req.body.nom ,
            prenom: req.body.prenom ,
            adresse: req.body.adresse ,
            service: req.body.service}}
        );
        res.send();
    }catch(err){
        res.send(err)
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


//generation du token
function genereAccessToken(prestataires){
    return jwt.sign(prestataires,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1800s'});
  }

/**
 * @swagger
 * /prestataires/connexion:
 *   post:
 *     summary: Authentification
 *     tags: [Prestataires]
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Connexion'
 *     responses:
 *       201:
 *         description: Prestataire connecté avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Connexion'
 *       401:
 *          description: Information incorrecte 
 */

router.post('/connexion', async(req, res) => {
    try{
      // si Email existe dans le mot de passe et que le mot de passe ecrit correspond alors on donne le token d'accés 
    const { email, motdepasse } = req.body
    const presta = await prestataire.findOne({ email }).lean()
        if (!presta) {
            console.log("EMAIL PAS BON");
            return res.status(401).send('email invalide');
        }

       if(req.body.motdepasse != presta.motdepasse){
        return res.status(401).send("Informations invalide");
       }
    //Generation du token si tout va bien
    const accessToken = genereAccessToken(presta);
    console.log(accessToken);
    res.status(201).send(accessToken);
  
    }catch (err){
      res.send(err)    
    }
  });


module.exports = router;