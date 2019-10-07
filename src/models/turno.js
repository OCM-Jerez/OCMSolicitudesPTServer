/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('turno', {
        idtTurno: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombreTurno: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        desde: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        hasta: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 'turno'
    });
};