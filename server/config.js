const mongoose = require("mongoose");

require("dotenv").config();

const API_URL = process.env.API_URL;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(API_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
