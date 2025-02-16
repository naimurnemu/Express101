const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})

app.get("/", (req, res) => {
  res.send(`
    <h2>This is Home Page</h2>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <h2>This is About Page</h2>
  `);
});

app.get("/help", (req, res) => {
  res.send(`
    <h2>This is Help Page</h2>
  `);
});