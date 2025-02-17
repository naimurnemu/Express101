const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(globalMiddleware);
app.use(require("./routes"));

app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).send(`<h2>${error.message}</h2>`);
  }

  res.status(500).send("<h2>Something went wrong</h2>");
})

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

