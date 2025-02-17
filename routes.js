const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
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

router.get("/about", (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.send(`<h2>This is Something Wrong in About</h2>`)
    } else {
      res.write(data);
      res.end();
    }
  })
});

router.get("/help", (req, res) => {
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


module.exports = router;