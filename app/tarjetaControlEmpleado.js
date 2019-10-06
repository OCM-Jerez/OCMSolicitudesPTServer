module.exports = (app, db) => {
    const baseUrl = '/api/v1';
    app.get(baseUrl + "/tarjetaControl/empleado/:idControlDiario", (req, res) =>
        db.tarjetasControles.findAll({
            where: {
                idControlDiario: req.params.idControlDiario,
                createdAt: new Date()
            },
            order: [
                ['orden', 'ASC']
            ]
        }).then((result) => res.json(result))
    );
}