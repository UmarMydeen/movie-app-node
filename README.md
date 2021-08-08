Movie Node Application

This application run in Mongo DB. Please below steps to launch the application

## Steps to follow to run this application

- I Assume that you have an latest node version installed in your machine, follow [mongodb](https://docs.mongodb.com/manual/installation/) Installation
- After installing [mongodb](https://docs.mongodb.com/manual/installation/) in your machine, run this command `mongosh movies` launch the mongodb service to perform CURD operations.
- To preload the [mongodb](https://docs.mongodb.com/manual/installation/) with data, run this command `db.movies.insertMany(movies)` copy paste movies data inside that query from [movies.json](https://github.com/UmarMydeen/movie-app-node/blob/master/fake/movies.json).
- Update the baseUrl in frontend to point to this endpoints.
