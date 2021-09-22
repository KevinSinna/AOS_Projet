const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;
const Mongoose = require("mongoose");

const Client = require("./models/Client");

Mongoose.connect("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/").then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes

/**
 * @swagger
 * tags:
 *      name: admin
 */
/**
 * @swagger
 * tags:
 *      name: prestataire
 */
/**
 * @swagger
 * tags:
 *      name: client
 */
/**
 * @swagger
 * /clients:
 *  get:

 *    description: Use to request all clients
 *    tags: [admin]
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/clients", (req, res) => {
  Client.find()
  .exec()
  .then(docs => {
    console.log(docs);
    //   if (docs.length >= 0) {
    res.status(200).json(docs);
    //   } else {
    //       res.status(404).json({
    //           message: 'No entries found'
    //       });
    //   }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
  // res.status(200).send("Customer results");
});

/**
 * @swagger
 * /client:
 *  put:
 *     description: Use to update client
 *     tags: [admin]
 *     responses:
 *       '201':
 *        description: Successfully put
 */
app.put("/client", (req, res) => {
  res.status(200).send("Successfully updated client");
});

/**
 * @swagger
 * /creer:
 *  post:
 *     description: Use to create client
 *     tags: [admin]
 *     responses:
 *       '201':
 *        description: Successfully put
 */
 app.post("/creer", (req, res) => {
    res.status(200).send("Successfully updated client");
  });
  /**
 * @swagger
 * /delete:
 *  delete:
 *     description: Use to create client
 *     tags: [admin]
 *     responses:
 *       '201':
 *        description: Successfully put
 */
 app.delete("/delete", (req, res) => {
    res.status(200).send("Successfully updated client");
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:5000/api-docs/`);
});