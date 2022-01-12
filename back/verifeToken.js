const jwt = require('jsonwebtoken');

module.exports = function auth(req,res,next){
  const token = req.header('auth-token');
  if(!token) return res.status(401).send('Accès refusé');
  try{
    const verified = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    req.prestataires = verified;
    next();
  }catch (err){
    res.status(400).send('Token invalide');
  }
};