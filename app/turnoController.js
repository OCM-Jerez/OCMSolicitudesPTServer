module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/turno", (req, res) =>
        db.turno.findAll().then((result) => res.json(result))
    );

    app.get(baseUrl + "/turno/:id", (req, res) =>
        db.turno.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post(baseUrl + "/turno", (req, res) =>
        db.turno.create({
            nombreTurno: req.body.nombreTurno,
            desde: req.body.desde,
            hasta: req.body.hasta
        }).then((result) => res.json(result))
    );

    app.put(baseUrl + "/turno", (req, res) =>
        db.turno.update({
            nombreTurno: req.body.nombreTurno,
            desde: req.body.desde,
            hasta: req.body.hasta
        }, {
            where: {
                idtTurno: req.body.idtTurno
            }
        }).then((result) => res.json(result))
    );

    app.delete(baseUrl + "/turno/:idtTurno", (req, res) =>
        db.turno.destroy({
            where: {
                idtTurno: req.params.idtTurno
            }
        }).then((result) => res.json(result))
    );
}