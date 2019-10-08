// import dotenv from 'dotenv';
// dotenv.config();

const express = require("express");

const bodyParser = require("body-parser");
const db = require("./src/models");
const apiEmpleados = require("./src/controllers/empleado");
const login = require("./src/controllers/login");
const apiControlesQuery = require("./src/controllers/controlQuery");

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
apiControlesQuery(app, db);

db.sequelize.sync().then(() => {
    app.listen(8084, () => console.log("App listening on port 8084!"));
});