'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
    language: { type: String },
    location: { type: String },
    plot: { type: String },
    posters: { type: String },
    soundEffects: {
        type: [{
            type: String,
        }]
    },
    stills: {
        type: [{
            type: String,
        }]
    },
    title: { type: String },
    imdbID: { type: String },
    listingType: { type: String },
    imdbRating: { type: String },
});

module.exports = mongoose.model('Movies', MoviesSchema);