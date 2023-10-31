module.exports = function(sequelize, DataTypes){

    let alias = "Voter";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        document:{
            type: DataTypes.STRING(255),
            allowNull: false
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
            type: DataTypes.STRING(300),
            allowNull: false
        },
        dob:{
            type: DataTypes.DATE,
            allowNull: false
        },
        is_candidate:{
            type: DataTypes.TINYINT(4),
            allowNull: false
        },
    };

    let config = {
        tableName: "Voter",
        timestamps: false
    }

    let Voter = sequelize.define(alias, cols, config);

    Voter.associate = function(models){
        
        Usuario.hasOne(models.Vote,
            {
                as: "Vote",
                foreignKey: "voter_id",
        });
    }
    return Voter;
}