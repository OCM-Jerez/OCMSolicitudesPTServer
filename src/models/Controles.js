/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('controles', {
        idControl: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        controlNombre: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        idLineaEnvasado: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'lineasEnvasado',
                key: 'idLineaEnvasado'
            }
        },
        descripcionTarjeta1: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta2: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta3: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta4: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta5: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta6: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta7: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        descripcionTarjeta8: {
            type: DataTypes.STRING(200),
            allowNull: true
        }
    }, {
        tableName: 'Controles'
    });
};