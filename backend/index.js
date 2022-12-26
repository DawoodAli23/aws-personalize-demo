const express = require("express");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());

//routes

//app start
app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});
