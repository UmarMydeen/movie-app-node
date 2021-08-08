var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

const listAllMovies = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Movies.find({}, (err, movie) => {
        if (err)
            res.send(err);
        res.json(movie);
    });
};

const createMovie = (req, res) => {
    var newMovie = new Movie(req.body);
    newMovie.save((err, movie) => {
        if (err)
            res.send(err);
        res.json(movie);
    });
};

const getMovieDetails = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Movies.findOne({ imdbID: req.params.id }, function (err, movie) {
        if (err)
            res.send(err);
        res.json(movie);
    });
};

module.exports.listAllMovies = listAllMovies;
module.exports.createMovie = createMovie;
module.exports.getMovieDetails = getMovieDetails;