const express = require("express");
const { signUp } = require("./controllers/user/signUp.user");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());

//routes
signUp();
//app start
app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});
