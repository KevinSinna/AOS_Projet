const express = require("express");
const router = express.Router()
const modelservice = require('../models/service')

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *        - PrestatairesID
 *        - service
 *        - description
 *        - date
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Numéro d'identifiant prestation auto généré 
 *         PrestatairesID:
 *           type: ObjectId
 *           description: Id d'un prestataire
 *         service:
 *           type: string
 *           description: service 
 *         date:
 *           type: [Date]
 *           description: Date de la prestation 
 *         description:
 *           type: String
 *           description: description du service proposé
 *       example:
 *         PrestatairesID: 614c5b1b853b0d77a38863bb
 *         service: plombier
 *         date: [2021:05:05,2021:05:05]
 *         description: plombier depuis 1999
 *         
 */
 

/**
 * @swagger
 * tags:
 *  name: Service
 *  description: Route API service -Port 7000 
 */

/**
 * @swagger
 * /Service:
 *   get:
 *     summary: retourne la liste des services
 *     tags: [Service]
 *     responses:
 *       201:
 *         description: liste de tous les services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */
 router.get('/', async (req, res) => {
  try{
      const service = await modelservice.find();
      res.status(201).json(service);
  }catch (err){
      res.send(err)
  }
})
/**
 * @swagger
 * /service:
 *   post:
 *     summary: crée un nouveau service
 *     tags: [Service]
 *     responses:
 *       201:
 *         description: Service ajouté avec succé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

//créer un prestataire
router.post("/", async (req, res) => {
  const service = new modelservice({
      PrestatairesID: req.body.PrestatairesID,
      service: req.body.service,
      description: req.body.description,
      date: req.body.date
  })
  try{
      const newService = await service.save();
      res.status(200).json(newService)
  }catch(err){
      res.send(err)
  }
})
module.exports = router;