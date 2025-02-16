const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      res.send(`
        <h2>Something went wrong</h2>
      `);
    } else {
      res.write(data);
      res.end();
    }
  })

});

app.get("/about", (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.send(`<h2>This is Something Wrong in About</h2>`)
    } else {
      res.write(data);
      res.end();
    }
  })

});

app.get("/help", (req, res) => {
  fs.readFile("./pages/help.html", (err, data) => {
    if (err) {
      res.send(`
      <h2>This is an Error in help page</h2>
    `);
    } else {
      res.write(data);
      res.end();
    }
  })

});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})