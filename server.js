'use strict';
const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./router');
const config = require('./config/development');

const app = express();

//mongo connection
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error: ', err);
process.exit(-1);
});

// view engine setup according to environment
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cross origin headers, delete if not needed
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.header('Access-Control-Allow-Credentials', true);
next();
});

routes(app);

/**
 * Get port from environment and store in Express.
 */
const port = config.port;
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
