const express = require("express");
const { ClientSession } = require("mongodb");
// const clients = require("../models/clients");
const router = express.Router()
const modelclients = require('../models/client')

/**
 * @swagger
 * components:
 *   schemas:
 *     Clients:
 *       type: object
 *       required:
 *        - nom
 *        - prenom
 *        - adresse
 *        - code_postal
 *        - adresse_mail
 *        - telephone
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
 *         adresse:
 *           type: string
 *           description: Prenom du client
 *         code_postal:
 *           type: number
 *           description: Code postale du client
 *         adresse_mail:
 *           type: string
 *           description: Adresse mail du client
 *         telephone:
 *           type: int
 *           description: Numéro de telephone du client
 *       example:
 *         id: 78212321025
 *         nom: Amadeus
 *         prenom: Julius
 *         adresse_mail: julius@gmail.com
 *         adresse: 14 rue de la gare
 *         code_postal: 91100
 *         telephone: 0132439586
 */

/**
 * @swagger
 * tags:
 *  name: Clients
 *  description: Route API clients -Port 5000
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
    const client = new modelclients({
        nom: req.body.nom ,
        prenom: req.body.prenom ,
        code_postal: req.body.code_postal,
        pseudo: req.body.pseudo,
        adresse: req.body.adresse,
        complement_adresse: req.body.complement_adresse,
        adresse_mail: req.body.adresse_mail,
        date_de_naissance: req.body.date_de_naissance,
        telephone : req.body.telephone
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
      try{
           await modelclients.updateOne(
              {_id: req.params.id},
              {$set: {
                nom: req.body.nom ,
                prenom: req.body.prenom ,
                code_postal: req.body.code_postal,
                pseudo: req.body.pseudo,
                adresse: req.body.adresse,
                complement_adresse: req.body.complement_adresse,
                adresse_mail: req.body.adresse_mail,
                date_de_naissance: req.body.date_de_naissance,
                telephone : req.body.telephone
            }}
          );
          res.send();
      }catch(err){
          res.send(err)
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


module.exports = router;