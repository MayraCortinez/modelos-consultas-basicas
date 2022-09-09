
module.exports = (sequelize, DataTypes) => {

    const alias = "Actor";

    const cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: true,
        },

        favorite_movie_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName : 'movies'
                },
                key: 'id',
            }
        },

    }



    const config = {
        tableName: "actors",
        timestamps: true,
        underscored: true
       /*  createdAt: 'timestamp',
        updatedAt: 'timestamp'  */
    };


    const Actor = sequelize.define(alias, cols, config);


    Actor.associate = function (models) {
        Actor.belongsTo(models.Movie, {
            as: 'movies',
            foreignKey: 'favorite_movie_id'
        })
    }


    return Actor;

}