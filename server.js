const express = require("express");
const food = require('./models/foodModel');

const db=require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.get("/getfoods", (req,res) => {
  food.find({}, (err, docs)=>{
    if (err) {
      console.log(err);
    } 

    else{
      res.send(docs);
    }
  })
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
