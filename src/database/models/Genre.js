
module.exports = (sequelize, DataTypes) => {

    const alias = "Genre";

    const cols = {

        id: {
            type : DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },

        name: {
            type : DataTypes.STRING(100),
            allowNull : false,

        },

        ranking: {
            type : DataTypes.INTEGER.UNSIGNED,
            unique : true,
            allowNull : false,
        },

        active: {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        },


    }




    const config = {
        tableName: "genres",
        timestamps: true,
        underscored: true
       /*  createdAt: 'timestamp',
        updatedAt: 'timestamp'  */
    };


    const Genre = sequelize.define(alias, cols, config);


    Genre.associate = function (models) {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }


    return Genre;

}