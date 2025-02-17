const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(globalMiddleware);
app.use(require("./routes"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})

function globalMiddleware(req, res, next) {
  console.log("This is a Global Middleware");
  console.log(`Request Method: ${req.method} and URL: ${req.url}`);

  if (req.query.bad) {
    return res.status(400).send("<h2>This is a Bad Request</h2>")
  }

  next();
}

function localMiddleware(req, res, next) {
  console.log("This is a Local Middleware");
  next();
}

