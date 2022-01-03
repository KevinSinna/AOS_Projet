const jwt = require('jsonwebtoken')
require('dotenv').config();
console.log('clé secret',process.env.ACCESS_TOKEN_SECRET);
console.log("test API");

const user ={
  id: 42,
  nom:'Axel',
  email:'axel@gmail.com',
  admin:true
}
function genereaccesstoken(user){
  return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1800s'});

}
const accessToken= genereaccesstoken(user);
console.log('acessToken', accessToken);

