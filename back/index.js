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

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/artists", (req, res)=> {
  database.query(
    "SELECT * FROM artist", (err, results)=> {
      console.log(results);
      if (err){
        res.status(500).send("Error get artists");
      } else {
        res.json(results);
      }
    }
  )
})

app.get("/representations", (req, res)=> {
  database.query(
    "SELECT * FROM representation", (err, results)=> {
      console.log(results);
      if (err){
        res.status(500).send("Error get representations")
      } else {
        res.json(results);
      }
    }
  )
})

app.post("/newsletter", (req, res) => {
  const { email, lastname, firstname } = req.body;
  const formAdd = { email, lastname, firstname };
  database.query("INSERT INTO newsletter SET ?", formAdd, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving email info");
    } else {
      res.status(201).send({ ...formAdd, id: result.insertId });
    }
  });
});






app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
