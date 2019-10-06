module.exports = function(sequelize, DataTypes) {
    const ControlDiario = sequelize.define('controlesDiarios', {
        idControlDiario: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idControl: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'Controles',
                key: 'idControl'
            }
        },
        turno: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        fecha: {
            type: 'TIMESTAMP',
            allowNull: true
        },
        idEmpleado: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'Empleados',
                key: 'idEmpleado'
            }
        },
        idtTurno: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'turno',
                key: 'idtTurno'
            }
        }
    }, {
        tableName: 'controlesDiarios'
    });

    return ControlDiario;
};