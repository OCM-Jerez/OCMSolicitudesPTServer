module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/controlDiario", (req, res) =>
        db.controlesDiarios.findAll().then((result) => res.json(result))
    );

    app.get(baseUrl + "/controlDiario/:id", (req, res) => {
        console.log(req.params);
        db.controlesDiarios.findByPk(req.params.id).then((result) => {
            console.log(result);
            return res.json(result);
        });
    });

    app.post(baseUrl + "/controlDiario", (req, res) =>
        db.controlesDiarios.create({
            idControl: req.body.idControl,
            turno: req.body.turno,
            fecha: req.body.fecha,
            idEmpleado: req.body.idEmpleado,
            idtTurno: req.body.idtTurno
        }).then(result => {
            console.log(result);
            return res.json(result);
        })
    );

    app.put(baseUrl + "/controlDiario", (req, res) =>
        db.controlesDiarios.update({
            idControl: req.body.idControl,
            turno: req.body.turno,
            fecha: req.body.fecha,
            idEmpleado: req.body.idEmpleado,
            idtTurno: req.body.idtTurno
        }, {
            where: {
                idControlDiario: req.body.idControlDiario
            }
        }).then((result) => {
            console.log(result);
            return res.json(result);
        }).catch(function(err) {
            console.log(err);
        })
    );

    app.delete(baseUrl + "/controlDiario/:id", (req, res) =>
        db.controlesDiarios.destroy({
            where: {
                idControlDiario: req.params.id
            }
        }).then((result) => res.json(result))
    );
}