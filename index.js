// importando o modulo do 'express''
const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    users: [
      {
        name: "Rodrigo",
        email: "viturino_souza@outlook.com",
        id: 1,
      },
    ],
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("servidor rodando");
});
