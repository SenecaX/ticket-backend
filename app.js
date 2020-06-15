const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
require("./api/models/db");
const apiRouter = require("./api/routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Auth app listening at http://localhost:${port}`)
);

//add cors
app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api", apiRouter);