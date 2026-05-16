const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {

  definition: {

    openapi: "3.0.0",

    info: {

      title: "Nexus API",

      version: "1.0.0",

      description: "Investor & Entrepreneur Platform API",

    },

    servers: [

      {
        url: "http://localhost:5005",
      },

    ],

  },

  apis: ["./src/routes/*.js"],

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;