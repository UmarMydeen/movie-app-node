var {
    listAllMovies, createMovie, getMovieDetails
} = require('../controllers/moviesController');

const MoviesRoutes = (app) => {
    // Movies Routes
    app.route('/movies')
        .get(listAllMovies)
        .post(createMovie);

    app.route('/Movies/:id')
        .get(getMovieDetails)
};

module.exports = MoviesRoutes;