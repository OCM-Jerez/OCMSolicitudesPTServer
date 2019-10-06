/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('empleados', {
        idEmpleado: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        primerApellido: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        segundoApellido: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        userName: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
        rol: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {
        tableName: 'Empleados'
    });
};