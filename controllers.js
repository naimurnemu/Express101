const fs = require("fs");

exports.homeController = (req, res) => {
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
}

exports.aboutController = (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.send(`<h2>This is Something Wrong in About</h2>`)
    } else {
      res.write(data);
      res.end();
    }
  })
}

exports.helpController = (req, res) => {
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
}