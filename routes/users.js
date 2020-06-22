const Nedb = require("nedb");
let db = new Nedb({
  filename: "users.db",
  autoload: true,
});

module.exports = (app) => {
  // Definindo na variavel uma rota padrão nesse DOC
  let route = app.route("/users");

  // Listando Todos os Dados
  route.get((req, res) => {
    db.find({})
      .sort({ name: 1 })
      .exec(function (err, users) {
        if (err) {
          // chamando o modulo de error
          route.utils.error.send(err, req, res);
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            users: users,
          });
        }
      });
  });

  // Inserindo Dados
  route.post((req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        // chamando o modulo de error
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  // Listando por ID
  let routeId = app.route("/users/:id");

  routeId.get((req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        // chamando o modulo de error
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  // Editando Dado
  routeId.put((req, res) => {
    db.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(Object.assign(req.params, req.body));
      }
    });
  });

  // Removendo Dado
  routeId.delete((req, res) => {
    db.remove({ _id: req.params.id }, {}, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.params);
      }
    });
  });
};
