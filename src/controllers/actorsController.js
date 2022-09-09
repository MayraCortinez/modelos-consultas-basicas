const {Op} = require('sequelize');
const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        let actors = db.Actor.findAll({
            order : [['rating', 'DESC']], 
        })
        .then(actors => {
            return res.render ('actorsList', {actors})
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        let actor = db.Actor.findByPk(req.params.id)
        .then(actor => {
            return res.render ('actorsDetail', {actor})
        })
        .catch(error => console.log(error))
    }
}