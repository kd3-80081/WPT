const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const config = require("config");
const app = express();

const appProductDetails = require("./routes/ServerSideProducts");

app.use(cors());

app.use(express.json());

app.use("/products", appProductDetails);

app.listen(config.get("port"), () => {
  console.log("Server started at : " + config.port);
});
