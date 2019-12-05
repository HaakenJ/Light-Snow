exports = (sequelize, DataTypes) => {
    const Resort = sequelize.define("Resort", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
    return Resort;
}