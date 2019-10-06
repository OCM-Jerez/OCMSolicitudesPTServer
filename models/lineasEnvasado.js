/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('lineasEnvasado', {
        idLineaEnvasado: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: true
        }
    }, {
        tableName: 'lineasEnvasado'
    });
};