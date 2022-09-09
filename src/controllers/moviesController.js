const {Op} = require('sequelize');
const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        let movies = db.Movie.findAll()
        .then(movies => {
            return res.render ('moviesList', {movies})
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        let movie = db.Movie.findByPk(req.params.id)
        .then(movie => {
            return res.render ('moviesDetail', {movie})
        })
        .catch(error => console.log(error))
    },
    new : (req,res) => {
        let movies = db.Movie.findAll({
            order : [['release_date', 'DESC']],
            limit: 5                                            //(La consigna de PG pide lo mismo que al listar)
        })
        .then(movies => {
            return res.render ('newestMovies', {movies})
        })
        .catch(error => console.log(error))
    },
    recommended : (req,res) => {
        let movies = db.Movie.findAll({
            where : {rating : {[Op.gte]: 9}},
            order : [['release_date', 'DESC']],  //5 primeras películas con rating mayor a 9 ordenadas por fecha de lanzamiento
            limit: 5
            /* order : [['rating', 'DESC']],         //5 primeras películas ordenadas por su rating
            limit: 5 */
        })
        .then(movies => {
            return res.render ('recommendedMovies', {movies})
        })
        .catch(error => console.log(error))
    },
    add: (req, res) => {
        const genres = db.Genre.findAll();
            return res.render("moviesAdd", {
                genres,
            });
        } ,
    create: (req, res) => {
        db.Movie.create({
            ...req.body,
        })
        .then(() =>{
            res.redirect('/movies')
        })
        .catch(errors => console.log(errors));
    },

    edit: (req, res) => {
        let movie = db.Movie.findByPk(req.params.id)
        .then(movie => {
            return res.render ('moviesEdit', {movie})
        })
        .catch(error => console.log(error))
    } ,
    
    update: (req,res) => {
        db.Movie.findByPk(req.params.id)
        db.Movie.update({
            ...req.body,
        },{
            where : {id : req.params.id}
        })
        .then(() =>{
            res.redirect('/movies')
        })
        .catch(errors => console.log(errors));
    },
 
    remove: (req, res) => {
        let movie = db.Movie.findByPk(req.params.id)
        .then(movie => {
            return res.render ('moviesDelete', {movie})
        })
        .catch(error => console.log(error))
    },
    destroy: (req, res) =>{
        db.Movie.findByPk(req.params.id)
        db.Movie.destroy({
            where : {id : req.params.id}
        })
        .then(() =>{
            res.redirect('/movies')
        })
        .catch(errors => console.log(errors)); 
    }  
}