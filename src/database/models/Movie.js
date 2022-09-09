
module.exports = (sequelize, DataTypes) => {

    const alias = "Movie";

    const cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },

        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },

        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },

        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName : 'genres'
                },
                key: 'id',
            }
        },

    }



    const config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
       /*  createdAt: 'timestamp',
        updatedAt: 'timestamp'  */
    };


    const Movie = sequelize.define(alias, cols, config);


    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id'
        }),
        Movie.hasMany(models.Actor, {
             as: 'actors',
            foreignKey: 'favorite_movie_id'
        })
        
    }


    return Movie;

}