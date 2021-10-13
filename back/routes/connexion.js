const express = require("express");
const router = express.Router()
const modelclients = require('../models/client')
const modelPrestataires = require('../models/prestataire')
const bcrypt = require('bcrypt')

router.get('/', async (req, res) => {
  try{
      // on va verifier si l'email et mot de passe existe 
      const prestataires = await modelPrestataires.find().select(['email','motdepasse']);
      // si Email existe dans le mot de passe et que le mot de passe ecrit correspond alors on donne le token d'accés 
      res.status(201).json(prestataires);
  }catch (err){
      res.send(err)
  }
})