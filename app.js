const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;


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

//
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
 *      name: test
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
  res.status(200).send("Customer results");
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
});