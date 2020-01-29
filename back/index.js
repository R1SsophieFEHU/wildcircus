const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const database = require("./config");
const bodyParser = require("body-parser");


app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());









app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
