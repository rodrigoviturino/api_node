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

// CONSIGN pega todos os arquivos da pasta que estamos selecionando e já faz o module.exports desses arquivos
// Chamando rotas do sistema
consign().include("routes").include("utils").into(app);

app.listen(3000, "127.0.0.1", () => {
  console.log("servidor rodando");
});
