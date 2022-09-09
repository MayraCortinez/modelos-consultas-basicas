const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recommended);

//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/add', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/edit/:id', moviesController.update); 
router.get('/movies/delete/:id', moviesController.remove);
router.post('/movies/delete/:id', moviesController.destroy);

module.exports = router;