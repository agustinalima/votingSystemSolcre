module.exports = function(sequelize, DataTypes){

    let alias = "Admin";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
    };

    let config = {
        tableName: "Admin",
        timestamps: false
    }

    let Admin = sequelize.define(alias, cols, config);

    return Admin;
}