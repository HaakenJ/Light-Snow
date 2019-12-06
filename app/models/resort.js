module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("location", {
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
    return Location;
}