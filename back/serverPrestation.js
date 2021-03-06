const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const mongoose = require('mongoose')
const prestationsRoutes = require("./routes/prestations.js")


mongoose.connect('mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/Prestation')

const port = 7500;

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
              url: "http://localhost:6000",
            },
            {
              url: "http://localhost:7500",
            },
            {
              url: "http://localhost:4000",
            },
            {
              url: "http://localhost:7000",
            },
        ],
      },
    apis: ["./routes/*.js"],
}

const specs = swaggerJsDoc(options)
// Inititalisation de la bd db.defaults()
const app = express()
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
//app.db = db;
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/prestations", prestationsRoutes)


app.listen(port, () => console.log(`Serveur lancé port : ${port}`))