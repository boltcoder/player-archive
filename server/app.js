const express = require('express');
const compression = require('compression');
const cors = require('cors')
const routes = require('./routes');

const app = express();


// to parse json body from Request stream.
app.use(express.json());

// to encode request bodies
app.use(express.urlencoded({ extended: true }));

//  compression middleware (default's gzip)
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());


// v1 api routes
app.use('/', routes);


module.exports = app;


