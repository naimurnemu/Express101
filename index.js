const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Node and ExpressJS</title>
      </head>
      <style>
        .container {
          text-align: center;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ccc;
          background: lightblue;
          max-width: 500px;
        }
      </style>
      <body>
        <div class="container">
          <h1>NodeJS is awesome with the ExpressJS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            doloremque odit quia maxime aspernatur quaerat est natus sit. Modi
            placeat, facilis aut rerum esse maiores, totam quis ea earum nihil nulla
            veritatis nostrum consectetur ex distinctio reiciendis aspernatur! Nulla
            at temporibus ut quis optio aspernatur dolore alias eum tempora dolorum?
          </p>
        </div>
      </body>
    </html>
  `);
});