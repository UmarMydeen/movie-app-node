const config = require('./config');
var app = require('./index.js'),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbConnectionUrl.dev, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(
    () => app.listen(port)
)
    .catch(
        err => console.log(err)
    );

console.log('Movies list RESTful API server started on: ' + port);