const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler.middleware");
const userRoutes = require("./routes/user.routes");
const prodcutRoutes = require("./routes/product.routes");
require("dotenv").config();
const app = express();
//middlewares
app.use(express.json());

//routes
app.use("/user", userRoutes);
app.use("/product", prodcutRoutes);
app.use(errorHandler);
//app start
app.get("/", (req, res) => {
  res.send(`<h1>App is running on port ${process.env.PORT}</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
