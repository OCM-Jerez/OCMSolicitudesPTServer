module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/empleado", (req, res) =>
        db.empleados.findAll().then((result) => res.json(result))
    );

    app.get(baseUrl + "/empleado/:id", (req, res) =>
        db.empleados.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post(baseUrl + "/empleado", (req, res) =>
        db.empleados.create({
            nombre: req.body.nombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            userName: req.body.userName,
            password: req.body.password,
            rol: req.body.rol
        }).then((result) => res.json(result))
    );

    app.get(baseUrl + "/empleado/login", (req, res) =>
        db.empleados.findOne({
            where: {
                userName: req.body.userName,
                password: req.body.password
            }

        }).then((result) => res.json(result))
    );

    app.put(baseUrl + "/empleado", (req, res) =>
        db.empleados.update({
            nombre: req.body.nombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            userName: req.body.userName,
            password: req.body.password,
            rol: req.body.rol
        }, {
            where: {
                idEmpleado: req.body.idEmpleado
            }
        }).then((result) => res.json(result))
    );

    app.delete(baseUrl + "/empleado/:id", (req, res) =>
        db.empleados.destroy({
            where: {
                idEmpleado: req.params.id
            }
        }).then((result) => res.json(result))
    );
}