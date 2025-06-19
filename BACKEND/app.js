require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(express.static(path.join(__dirname, "../FRONTEND/dist")));

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONTEND/dist/index.html"));
});

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(port, () => {
      console.log(`Server has been started on port ${port}...`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
