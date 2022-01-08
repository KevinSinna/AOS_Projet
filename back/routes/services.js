const express = require("express");
const router = express.Router()
const modelservices = require('../models/service')

/**
 * @swagger
 * components:
 *   schemas:
 *     Services:
 *       type: object
 *       required:
 *        - id
 *        - PrestataireID
 *        - Service
 *        - DateDebut
 *        - DateFin
 *        - Description
 *        - Status
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Numéro d'identifiant service auto généré 
 *         PrestataireID:
 *           type: ObjectId
 *           description: Id d'un prestataire
 *         Service:
 *           type: [string]
 *           description: service rendue
 *         DateDebut:
 *           type: Date
 *           description: Date de debut
 *         DateFin:
 *           type: date
 *           description: Date de fin
 *         Description:
 *           type: String
 *           description: Description du service 
 *         Status:
 *          type: String
 *          description: Status du service
 *       example:
 *         PrestataireID: 61d40d3e312c4dbb6f686e35
 *         Service: plombier
 *         DateDebut: 2021:05:05
 *         DateFin: 2021:06:07
 *         Description: Plompier avec 20 ans expérience
 *         Status: Active
 *         
 */

/**
 * @swagger
 * tags:
 *  name: Services 
 *  description: Route API prestations -Port 7000 
 */

/**
 * @swagger
 * /Services:
 *   get:
 *     summary: retourne la liste des services
 *     tags: [Services]
 *     responses:
 *       201:
 *         description: liste de tous les services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Services'
 */

//Selectionner tout les services
router.get('/', async (req, res) => {
  try{
      const services = await modelservices.find();
      res.status(201).json(services);
  }catch (err){
      res.send(err)
  }
})

/**
 * @swagger
 * /Services/{id}:
 *   get:
 *     summary: Retourne le service en fonction de l'id
 *     tags: [Services]
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
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: prestations non existant
 */

//Selectionner un seul prestation
router.get('/:id', async (req, res) =>{
    try {
        const service = await modelservices.findById(req.params.id);
        res.status(200).json(service)
    } catch (err) {
        res.send(err)
    }
  })
  
/**
 * @swagger
 * /Services/Recherche/{Service}:
 *   get:
 *     summary: Retourne le service en fonction de l'id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: Service
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
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: prestations non existant
 */

//Selectionner un seul prestation
router.get('/Recherche/:Service', async (req, res) =>{
    try {
      
      const service = await modelservices.find({Service: req.params.Service})
      //   const service = await modelservices.findById(req.params.id);
        res.status(200).json(service)
    } catch (err) {
        res.send(err)
    }
  })

/**
 * @swagger
 * /Services/Recherche/Service/{Service}:
 *   get:
 *     summary: Retourne le service en fonction de l'id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: Service
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
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: prestations non existant
 */

//Selectionner un seul prestation
router.get('/Recherche/Service/:Service', async (req, res) =>{
    try {
        
      const service = await (modelservices.find({Service: req.params.Service}));
      //   const service = await modelservices.findById(req.params.id);
        res.status(200).json(service)
    } catch (err) {
        res.send(err)
    }
  })
/**
 * @swagger
 * /Services:
 *   post:
 *     summary: crée un nouveau service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Services'
 *     responses:
 *       201:
 *         description: Service ajouté avec succée
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Services'
 */

//créer un service
router.post("/", async (req, res) => {
  const service = new modelservices({
      PrestataireID: req.body.PrestataireID,
      DateDebut: req.body.DateDebut,
      DateFin: req.body.DateFin,
      Description: req.body.Description,
      Service: req.body.Service,
      Status : req.body.Status
  })
  try{
      const newService = await service.save();
      res.status(200).json(newService)
      console.log("Service crée!!")
  }catch(err){
      res.send(err)
  }
})

/**
 * @swagger
 * /Services/{id}:
 *   delete:
 *     summary: Supprime un service correspondant à l'id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Supprime le service correspondant à l'id
 *     responses:
 *       200:
 *         description: Service supprimé 
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Services'
 *       404:
 *         description: service non existant
 */

 router.delete("/:id",async (req, res) => {
  try{
      await modelservices.deleteOne({_id:req.params.id})
      res.send()
  }catch(err){
      res.send(err)
  }
  })
/**
 * @swagger
 * /Services/{id}:
 *   put:
 *     summary: Modifier les informations d'une prestation
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema:
 *          type: string
 *          required: true
 *          description: ID du service
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Services'
 *     responses:
 *       201:
 *         description: Information modifié avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Services'
 *       404:
 *         description: Prestation inexistant
 */

 router.put("/:id",async (req, res) => {
  //Mise a jour des informations
      try{
          await modelservices.updateOne(
              {_id: req.params.id},
              {$set: {
                PrestataireID: req.body.PrestataireID,
                DateDebut: req.body.DateDebut,
                DateFin: req.body.DateFin,
                Description: req.body.Description,
                Service: req.body.Service,
                Status : req.body.Status
          }}
          );
          res.send();
      }catch(err){
          res.send(err)
      }
  })

module.exports = router;