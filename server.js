const config = require('./config');
var app = require('./index.js'),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const dbUrl = process.env.NODE_ENV === 'dev' ? config.dbConnectionUrl.dev : config.dbConnectionUrl.prod;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(
    () => app.listen(port)
)
    .catch(
        err => console.log(err)
    );

console.log('Environment', process.env);
console.log('Movies list RESTful API server started on: ' + port);