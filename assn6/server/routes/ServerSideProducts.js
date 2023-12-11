const express = require("express");
const mysql = require("mysql");
const config = require("config");
const app = express.Router();

const connectionDetails = {
  host: config.get("host"),
  database: config.get("database"),
  user: config.get("username"),
  password: config.get("password"),
};

console.log(connectionDetails);
//GET
app.get("/", (request, response) => {
  var statement = "select * from products";
  const connection = mysql.createConnection(connectionDetails);
  connection.query(statement, (error, result) => {
    console.log("ERROR");
    console.log(error);
    console.log("RESULT");
    console.log(result);

    if (error == null) {
      connection.end();
      response.send(result);
    } else {
      connection.end();
      var message = { message: "Invalid request" };
      response.send(message);
    }
  });
});

//POST
app.post("/", (request, response) => {
  var statement = `insert into products (producttitle, price, stock) values('${request.body.producttitle}',${request.body.price},${request.body.stock})`;
  const connection = mysql.createConnection(connectionDetails);
  connection.query(statement, (error, result) => {
    console.log("ERROR");
    console.log(error);
    console.log("RESULT");
    console.log(result);

    if (error == null) {
      connection.end();
      response.send(result);
    } else {
      connection.end();
      var message = { message: "Invalid request" };
      response.send(message);
    }
  });
});

//PUT
app.put("/:productid", (request, response) => {
  var statement = `update products set producttitle = '${request.body.producttitle}', price = ${request.body.price}, stock = ${request.body.stock} where productid = ${request.params.productid}`;
  console.log("PUT");
  console.log(statement);
  const connection = mysql.createConnection(connectionDetails);
  connection.query(statement, (error, result) => {
    console.log("ERROR");
    console.log(error);
    console.log("RESULT");
    console.log(result);

    if (error == null) {
      connection.end();
      response.send(result);
    } else {
      connection.end();
      var message = { message: "Invalid request" };
      response.send(message);
    }
  });
});

//DELETE
app.delete("/:productid", (request, response) => {
  var statement = `delete from products where productid = ${request.params.productid}`;
  const connection = mysql.createConnection(connectionDetails);
  connection.query(statement, (error, result) => {
    console.log("ERROR");
    console.log(error);
    console.log("RESULT");
    console.log(result);

    if (error == null) {
      connection.end();
      response.send(result);
    } else {
      connection.end();
      var message = { message: "Invalid request" };
      response.send(message);
    }
  });
});

module.exports = app;
