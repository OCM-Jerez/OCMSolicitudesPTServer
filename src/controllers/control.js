module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/control", (req, res) =>
        db.controles.findAll().then((result) => res.json(result))
    );

    app.get(baseUrl + "/control/:id", (req, res) =>
        db.controles.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post(baseUrl + "/control", (req, res) =>
        db.controles.create({
            controlNombre: req.body.controlNombre,
            idLineaEnvasado: req.body.idLineaEnvasado,
            descripcionTarjeta1: req.body.descripcionTarjeta1,
            descripcionTarjeta2: req.body.descripcionTarjeta2,
            descripcionTarjeta3: req.body.descripcionTarjeta3,
            descripcionTarjeta4: req.body.descripcionTarjeta4,
            descripcionTarjeta5: req.body.descripcionTarjeta5,
            descripcionTarjeta6: req.body.descripcionTarjeta6,
            descripcionTarjeta7: req.body.descripcionTarjeta7,
            descripcionTarjeta8: req.body.descripcionTarjeta8
        }).then((result) => res.json(result))
    );


    app.put(baseUrl + "/control", (req, res) =>
        db.controles.update({
            controlNombre: req.body.controlNombre,
            idLineaEnvasado: req.body.idLineaEnvasado,
            descripcionTarjeta1: req.body.descripcionTarjeta1,
            descripcionTarjeta2: req.body.descripcionTarjeta2,
            descripcionTarjeta3: req.body.descripcionTarjeta3,
            descripcionTarjeta4: req.body.descripcionTarjeta4,
            descripcionTarjeta5: req.body.descripcionTarjeta5,
            descripcionTarjeta6: req.body.descripcionTarjeta6,
            descripcionTarjeta7: req.body.descripcionTarjeta7,
            descripcionTarjeta8: req.body.descripcionTarjeta8
        }, {
            where: {
                idControl: req.body.idControl
            }
        }).then((result) => res.json(result))
    );

    app.delete(baseUrl + "/control/:id", (req, res) =>
        db.controles.destroy({
            where: {
                idcontrol: req.params.id
            }
        }).then((result) => res.json(result))
    );
}