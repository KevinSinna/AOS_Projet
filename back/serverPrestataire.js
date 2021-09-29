const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const mongoose = require('mongoose')
const prestatairesRoutes = require("./routes/prestataires.js")


mongoose.connect('mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/Prestataire')

const port = 5000;

mongoose.connection.once('open',function(){
  console.log('connection a bien été établie');
}).on('error',function(error){
  console.log('erreur :',error);
});

const options = {
    definition: {
      openapi:"3.0.0",
      info: {
        title: "API",
        version: "1.0.0",
        description: "Apps API",
        contact: {
          name: "Il y'en a pas"
          }
        },
        servers: [ 
            {
              url: "http://localhost:5000",
            },
            {
              url: "http://localhost:6000",
            },
        ],
      },
    apis: ["./routes/*.js"],
}

const specs = swaggerJsDoc(options)
const app = express()
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use(cors)
app.use(morgan("dev"))
app.use("/prestataires", prestatairesRoutes)


app.listen(port, () => console.log(`Serveur lancé port : ${port}`))