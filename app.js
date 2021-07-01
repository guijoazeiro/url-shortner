const express = require("express");
require("dotenv").config();

const app = express();

const connectDB = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/", require("./routes/index"));
app.use("/api", require("./routes/url"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
