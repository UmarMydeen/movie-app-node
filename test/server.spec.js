const app = require('../index');
const Movie = require('../api/models/moviesModel');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('../config')

beforeEach((done) => {
    mongoose.connect(config.dbConnectionUrl.dev,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => done());
});

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    });
});

test("GET /movies", async () => {
    const movie = await Movie.create({ id: 'mockId1', title: 'mockTitle1', poster: 'mockposter1' });

    await supertest(app).get('/movies')
        .expect(200)
        .then((response) => {
            // Check type and length
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(1);

            // Check data
            expect(response.body[0].title).toBe(movie.title);
            expect(response.body[0].content).toBe(movie.poster);
        });
});

test("GET /movies/:id", async () => {
    const mockId = 'mockId1';
    const movie = await Movie.create({ imdbID: mockId, title: 'mockTitle1', poster: 'mockposter1' });

    await supertest(app).get(`/Movies/${mockId}`)
        .expect(200)
        .then((response) => {
            console.log('==>', response.body);
            expect(response.body.imdbID).toBe(movie.imdbID);
            expect(response.body.title).toBe(movie.title);
            expect(response.body.content).toBe(movie.content);
        });
});

