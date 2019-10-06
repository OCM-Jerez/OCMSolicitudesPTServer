const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./models");
const apiEmpleados = require("./app/empleado");
const login = require("./app/login");
const apiControles = require("./app/control");
const apiControlesQuery = require("./app/controlQuery");
const apiLineasEnvasado = require("./app/lineaEnvasado");
const apiControlesDiarios = require("./app/controlDiario");
const apiControlesDiariosQuery = require("./app/controlDiarioQuery");
const apiTarjetasControles = require("./app/tarjetaControl");
const apiTarjetasControlesEmpleado = require("./app/tarjetaControlEmpleado");
const apiTurnoControl = require("./app/turnoController");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("app/public"));
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