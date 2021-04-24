const http = require('http'),
path = require('path'), //The path module provides utilities for working with file and directory paths
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
dotenv = require("dotenv");

var app = express();
var port = process.env.PORT || 8000;
var server = http.createServer(app); //This is where our server gets created
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(logger('tiny'));
app.use(require('./routes'));
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'view'))); //We define the views folder as the one where all static content will be served

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});


const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


