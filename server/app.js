//Description: This is the main file of the server

//Import modules/dependencies
const { mongoConnect } = require("./config");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const cors = require("cors");

//Function to initiate server connection to MongoDB
async function startMongoServer() {
  await mongoConnect();

  //Utilize parser for requests
  app.use(bodyParse.urlencoded({ extended: false }));
  app.use(bodyParse.json());
  app.use(cors());

  //API route connections

  //Listen for active app on Port 3000
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

//Start server
startMongoServer();
