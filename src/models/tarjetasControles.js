/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tarjetasControles', {
        idTarjetaControl: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        horaTarea: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        horaDesde: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        horaHasta: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        hora: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        resultado: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
        observaciones: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        idControlDiario: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'controlesDiarios',
                key: 'idControlDiario'
            }
        },
        enHora: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        orden: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        fechaHoraControl: {
            type: 'TIMESTAMP',
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        tableName: 'tarjetasControles'
    });
};