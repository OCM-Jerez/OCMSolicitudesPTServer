module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/lineaEnvasado", (req, res) =>
        db.lineasEnvasado.findAll().then((result) => res.json(result))
    );

    app.get(baseUrl + "/lineaEnvasado/:id", (req, res) =>
        db.lineasEnvasado.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post(baseUrl + "/lineaEnvasado", (req, res) =>
        db.lineasEnvasado.create({
            descripcion: req.body.descripcion
        }).then((result) => res.json(result))
    );


    app.put(baseUrl + "/lineaEnvasado", (req, res) =>
        db.lineasEnvasado.update({
            descripcion: req.body.descripcion
        }, {
            where: {
                idLineaEnvasado: req.body.idLineaEnvasado
            }
        }).then((result) => res.json(result))
    );

    app.delete(baseUrl + "/lineaEnvasado/:id", (req, res) =>
        db.lineasEnvasado.destroy({
            where: {
                idLineaEnvasado: req.params.id
            }
        }).then((result) => res.json(result))
    );
}