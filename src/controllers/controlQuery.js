module.exports = (app, db) => {
    const baseUrl = '/api/v1';


    app.get(baseUrl + "/controlQuery/:idLineaEnvasado", (req, res) =>
        db.controles.findAll({
            where: {
                idLineaEnvasado: req.params.idLineaEnvasado
            }
        }).then((result) => res.json(result))
    );


}