const express = require("express");

const cors = require("cors");

const sequelize = require("./config/db");


// MODELS
require("./models/User");

require("./models/Meeting");

require("./models/Document");

require("./models/Transaction");


// ROUTES
const authRoutes = require(
  "./routes/authRoutes"
);

const meetingRoutes = require(
  "./routes/meetingRoutes"
);

const documentRoutes = require(
  "./routes/documentRoutes"
);

const transactionRoutes = require(
  "./routes/transactionRoutes"
);


const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// STATIC FILES
app.use(
  "/uploads",
  express.static("C:/tempUploads")
);


// ROUTES
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/meetings",
  meetingRoutes
);

app.use(
  "/api/documents",
  documentRoutes
);

app.use(
  "/api/transactions",
  transactionRoutes
);


// DATABASE
sequelize.sync()

.then(() => {

  console.log(
    "Database Connected"
  );

})

.catch((err) => {

  console.log(
    "Database Error:",
    err
  );

});


// TEST ROUTE
app.get("/", (req, res) => {

  res.send("Nexus API Running");

});


module.exports = app;