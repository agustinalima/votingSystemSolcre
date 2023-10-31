module.exports = function(sequelize, DataTypes){

    let alias = "Vote";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        candidate_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        voter_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    };

    let config = {
        tableName: "Vote",
        timestamps: false
    }

    let Vote = sequelize.define(alias, cols, config);

    Vote.associate = function(models){
        
        Vote.belongsTo(models.Voter,
            {
                as: "Vote",
                foreignKey: "voter_id",
        });
    }
    return Vote;
}