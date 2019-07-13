const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./models");
const apiEmpleados = require("./app/empleado");
const apiControles = require("./app/control");
const apiLineasEnvasado = require("./app/lineaEnvasado");
const apiControlesDiarios = require("./app/controlDiario");
const apiTarjetasControles = require("./app/tarjetaControl");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiEmpleados(app, db);
apiControles(app, db);
apiLineasEnvasado(app, db);
apiControlesDiarios(app, db);
apiTarjetasControles(app, db);

db.sequelize.sync().then(() => {
    app.listen(8084, () => console.log("App listening on port 8084!"));
});