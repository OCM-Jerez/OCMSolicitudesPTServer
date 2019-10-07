const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./src/models");
const apiEmpleados = require("./src/controllers/empleado");
const login = require("./src/controllers/login");
const apiControles = require("./src/controllers/control");
const apiControlesQuery = require("./src/controllers/controlQuery");
const apiLineasEnvasado = require("./src/controllers/lineaEnvasado");
const apiControlesDiarios = require("./src/controllers/controlDiario");
const apiControlesDiariosQuery = require("./src/controllers/controlDiarioQuery");
const apiTarjetasControles = require("./src/controllers/tarjetaControl");
const apiTarjetasControlesEmpleado = require("./src/controllers/tarjetaControlEmpleado");
const apiTurnoControl = require("./src/controllers/turnoController");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("src/controllers/public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

apiEmpleados(app, db);
login(app, db);
apiControles(app, db);
apiControlesQuery(app, db);
apiLineasEnvasado(app, db);
apiControlesDiarios(app, db);
apiControlesDiariosQuery(app, db);
apiTarjetasControles(app, db);
apiTarjetasControlesEmpleado(app, db);
apiTurnoControl(app, db);

db.sequelize.sync().then(() => {
    app.listen(8084, () => console.log("App listening on port 8084!"));
});