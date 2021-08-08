Movie Node Application

This application run in Mongo DB. Please below steps to launch the application

## Steps to follow to run this application

- do run `npm install`
- Set environment variable in your local machine `NODE_ENV='dev'` if you are planning to point to local mongoDb instance otherwise application points to Mongodb Atlas cloud instance
- do run `npm run start` to launch application

## Configuring MongoDB in local machine

- Assume that you have an latest node version installed in your machine, follow [mongodb](https://docs.mongodb.com/manual/installation/) Installation
- After installing [mongodb](https://docs.mongodb.com/manual/installation/) in your machine, run this command `mongosh movies` to launch mongodb service instance to perform CURD operations.
- To preload the [mongodb](https://docs.mongodb.com/manual/installation/) with data, run this command `db.movies.insertMany(movies)` copy paste movies data inside that query from [movies.json](https://github.com/UmarMydeen/movie-app-node/blob/master/fake/movies.json).

This same application is hosted as heroku app refer this hosted endpoint - `https://frozen-brook-16543.herokuapp.com`
