let express = require("express");
let routes = express.Router();

routes.get("/", (req, res) => {
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

routes.get("/admin", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    users: [],
  });
});

module.exports = routes;
