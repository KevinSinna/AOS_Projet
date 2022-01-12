const express = require("express");
const { ClientSession } = require("mongodb");
// const clients = require("../models/clients");
const router = express.Router()
const modelclients = require('../models/client')
const bcrypt = require("bcrypt");
// Token de connexion
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { find, findOne } = require("../models/client");

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
 *           description: email d'un client
 *         motdepasse:
 *           type: string
 *           description: mot de passe d'un client
 *       example:
 *         email: julius@gmail.com
 *         motdepasse : juliuspassword  
 * 
 *     Clients:
 *       type: object
 *       required:
 *        - nom
 *        - prenom
 *        - telephone
 *        - motdepasse
 *        - adresse
 *        - email
 *        - date_de_naissance
 *       properties:
 *         id:
 *           type: number
 *           description: Numéro d'identifiant du client auto généré 
 *         nom:
 *           type: string
 *           description: Nom du client
 *         prenom:
 *           type: string
 *           description: Prenom du client
 *         date_de_naissance:
 *           type: date
 *           description: Date de naissance du client
 *         motdepasse:
 *           type: string
 *           description: Mot de passe du client
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
 *         telephone:
 *           type: string
 *           description: telephone du client
 *         email:
 *           type: string
 *           description: Adresse mail du client
 *         Token:
 *           type: string
 *           description: Token du client
 *         date_de_naissance:
 *           type: date
 *           description: Date de naissance du client
 *       example:
 *         id: 78212321025
 *         nom: Amadeus
 *         prenom: Julius
 *         telephone : 012323241
 *         motdepasse: juliuspassword
 *         date_de_naissance: 1997-10-10
 *         email: julius@gmail.com
 *         adresse: 
 *          rue: 93 bis rue de la metropole
 *          ville: Buisance
 *          codePostal: 75010
 */

/**
 * @swagger
 * tags:
 *  name: Clients
 *  description: Route API clients -Port 4000
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: retourne la liste des clients
 *     tags: [Clients]
 *     responses:
 *       201:
 *         description: liste de tous les clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clients'
 */

//Selectionner tout les clients 
router.get('/', async (req, res) => {
    try{
        const clients = await modelclients.find();
        res.status(201).json(clients);
    }catch (err){
        res.send(err)
    }
})


/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     summary: Retourne le client en fonction de l'id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: client correspondant à l'id
 *     responses:
 *       200:
 *         description: Information sur le client avec l'id renseigné 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       404:
 *         description: clients non existant
 */

//Selectionner un seul client
router.get('/:id', async (req, res) =>{
    try {
        const client = await modelclients.findById(req.params.id);
        res.status(200).json(client)
    } catch (err) {
        res.status(404)
    }
})

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: crée un nouveau client
 *     tags: [Clients]
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Clients'
 *     responses:
 *       201:
 *         description: client ajouté avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clients'
 */

//créer un client
router.post("/", async (req, res) => {

//Verifie l'email
const emailexiste = await modelclients.findOne({email : req.body.email});
if(emailexiste) return res.status(400).send('Email existant');

//HashPassword
const salt = await bcrypt.genSalt(10);
const motdepassehash = await bcrypt.hash(req.body.motdepasse,salt);
    

    const client = new modelclients({
        nom: req.body.nom ,
        prenom: req.body.prenom ,
        adresse: req.body.adresse,
        motdepasse: motdepassehash,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        email: req.body.email,
        date_de_naissance: req.body.date_de_naissance
    })
    try{
        const newPrestaire = await client.save();
        res.status(200).json(newPrestaire)
    }catch(err){
        res.send(err)
    }
})

/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     summary: Modifier les informations d'un client
 *     tags: [Clients]
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
 *         $ref: '#/components/schemas/Clients'
 *     responses:
 *       201:
 *         description: Information modifié avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clients'
 *       404:
 *         description: client inexistant
 */


router.put("/:id",async (req, res) => {
  //Mise a jour des informations
  console.log(req.body.motdepasse);
if(req.body.motdepasse != undefined){
    console.log("je rentre");
    console.log(req.body.motdepasse);
    const salt = await bcrypt.genSalt(10);
    const motdepassehash = await bcrypt.hash(req.body.motdepasse,salt);
    try{
        await modelclients.updateOne(
            {_id: req.params.id},
            {$set: {nom: req.body.nom ,
              prenom: req.body.prenom ,
              adresse: req.body.adresse,
              motdepasse: motdepassehash,
              email: req.body.email,
              date_de_naissance: req.body.date_de_naissance,
              telephone: req.body.telephone}}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
}else{

    try{
        await modelclients.updateOne(
            {_id: req.params.id},
            {$set: {
              nom: req.body.nom ,
              prenom: req.body.prenom ,
              adresse: req.body.adresse,
              email: req.body.email,
              telephone: req.body.telephone,
              date_de_naissance: req.body.date_de_naissance
          }}
        );
        res.send();
    }catch(err){
        res.send(err)
    }
}
})
/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     summary: Supprime le client correspondant à l'id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Supprime le client correspondant à l'id
 *     responses:
 *       200:
 *         description: client supprimé 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       404:
 *         description: client non existant
 */
router.delete("/:id",async (req, res) => {
try{
    await modelclients.deleteOne({_id:req.params.id})
    res.send()
}catch(err){
    res.send(err)
}
})



//generation du token
function genereAccessToken(clientcourant){
    return jwt.sign(clientcourant,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30s'});
  }

/**
 * @swagger
 * /clients/connexion:
 *   post:
 *     summary: Authentification
 *     tags: [Clients]
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Connexion'
 *     responses:
 *       201:
 *         description: Client connecté avec succès
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
    const clientcourant = await modelclients.findOne({ email }).lean()
        if (!clientcourant) {
            console.log("EMAIL PAS BON");
            return res.status(401).send('email invalide');
        }
        const mdpvalide = await bcrypt.compare(req.body.motdepasse,clientcourant.motdepasse)
        if(!mdpvalide){
           
            return res.status(401).send("Informations invalide");
           }
    //Generation du token si tout va bien
    const accessToken = genereAccessToken(clientcourant);
    const token = {
        AccesToken : accessToken
    }
    console.log(accessToken);
    res.status(201).send(token);
    a = email
    // const services = await (modelservices.find({email: a}));
        // const prestataires = await modelPrestataires.find({email: a}).select(['id','nom','prenom']);
        try{
            await modelclients.updateOne(
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