const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// estamos passando variavel de acessp APP para todos os arquivos da pasta routers
consign().include("routers").into(app);

app.listen(3000, "127.0.0.1", () => {
  console.log("servidor rodando");
});
