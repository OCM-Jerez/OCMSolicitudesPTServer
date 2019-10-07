module.exports = (app, db) => {
    const baseUrl = '/api/v1';

    app.get(baseUrl + "/controlDiario/empleado/:idEmpleado", (req, res) =>
        db.controlesDiarios.findAll({
            where: {
                idEmpleado: req.params.idEmpleado
            }

        }).then((result) => res.json(result))
    );
};