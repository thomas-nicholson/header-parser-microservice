const express = require("express");
const routes = require('./routes');

const app = express();

app.use(express.json());   //Body parser

app.use(routes);

const PORT = process.env.PORT || 5000;

// server Create
const server = app.listen(PORT , () =>{
  console.log(`Server Running On ${PORT}`);
});