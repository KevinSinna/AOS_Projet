const express = require("express");
const router = express.Router()
const modelclients = require('../models/client')
const modelPrestataires = require('../models/prestataire')
const bcrypt = require('bcrypt')

// Token de connexion
require('dotenv').config();
const jwt = require('jsonwebtoken');

//generation du token
function genereAccessToken(prestataires){
  return jwt.sign(prestataires,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1800s'});
}

router.get('/', async(req, res) => {
  const prestataires = await modelPrestataires.find().select(['email','motdepasse']);
  try{
    // si Email existe dans le mot de passe et que le mot de passe ecrit correspond alors on donne le token d'accés 
  if (req.body.email !== prestataires.email) {
    res.status(401).send('Mot de passe invalide');
    return ;
  }
  if (req.body.motdepasse !== prestataires.motdepasse) {
    res.status(401).send('Mot de passe invalide');
    return ;
  }
  //Generation du token si tout va bien
  const accessToken = genereAccessToken(prestataires);
  res.status(200).send(accessToken);

  }catch (err){
    res.send(err)    
  }
});