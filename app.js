const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const DBconnection = require("./connection/connection");
require("dotenv").config();
const routes = require("./routes/routes");

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h2>List of people</h2><a href ='/persons'>see people</a>`);
});

app.use("/persons", routes);

const DB = async () => {
  try {
    await DBconnection(process.env.MongoDB);

    app.listen({ port }, () => {
      console.log(`server is running on port,${port}`);
    });
  } catch (error) {
    // process.exit(0)
    console.log(error);
  }
};

DB();

// app.listen({port}, ()=>{
//     console.log(`server is running on port,${port}`)

// })
