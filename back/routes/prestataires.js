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
 *        - token
 *        - adresse
 *        - service
 *        - telephone
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
 *         token:
 *           type: string
 *           description: token d'un prestataire  
 *         adresse:
 *           type: object
 *           properties:
 *             rue:
 *                type: string
 *                description: Rue du client
 *             code postale:
 *                type: string
 *                description: code postale du client
 *             ville:
 *                type: string
 *                description: ville du client
 *         service:
 *           type: [string]
 *           description: Liste des services proposé par le prestataire 
 *         telephone:
 *           type: string
 *           description: telephone d'un prestataire  
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
        const prestataires = await modelPrestataires.find();
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
 * /Prestataires/Recherche/{Prestataires}:
 *   get:
 *     summary: Retourne le service en fonction de l'id
 *     tags: [Prestataires]
 *     parameters:
 *       - in: path
 *         name: service
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
 *               $ref: '#/components/schemas/Prestataires'
 *       404:
 *         description: prestations non existant
 */

//Selectionner un seul prestation
router.get('/Recherche/:Prestataires', async (req, res) =>{
    try {
      
      const prestataire = await modelservices.find({service: req.params.service})
      //   const service = await modelservices.findById(req.params.id);
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
    //HashPassword
const salt = await bcrypt.genSalt(10);
const motdepassehash = await bcrypt.hash(req.body.motdepasse,salt);

    const prestataire = new modelPrestataires({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        motdepasse: motdepassehash,
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
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Prestataires'
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

console.log(req.body.motdepasse);
if(req.body.motdepasse != undefined){
    console.log("je rentre")
    const salt = await bcrypt.genSalt(10);
    const motdepassehash = await bcrypt.hash(req.body.motdepasse,salt);
    try{
        await modelPrestataires.updateOne(
            {_id: req.params.id},
            {$set: {nom: req.body.nom ,
            prenom: req.body.prenom ,
            motdepasse: motdepassehash,
            adresse: req.body.adresse ,
            service: req.body.service}}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
}else{
    console.log("pas de mot");
    // const motdepassehash = req.body.motdepasse;
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
        const mdpvalide = await bcrypt.compare(req.body.motdepasse,presta.motdepasse)
       if(!mdpvalide){
           
        return res.status(401).send("Informations invalide");
       }
    //Generation du token si tout va bien
    const accessToken = genereAccessToken(presta);
    console.log(accessToken);
    res.status(200).send(accessToken);
    a = email
    // const services = await (modelservices.find({email: a}));
        // const prestataires = await modelPrestataires.find({email: a}).select(['id','nom','prenom']);
        try{
            await modelPrestataires.updateOne(
                {email: a},
                {$set: {token: accessToken }}
            );
            res.send();
        }catch(err){
            res.send(err)
        }
    //    res.status(201).send(accessToken);
    
    }catch (err){
      res.send(err)    
    }
  });


module.exports = router;