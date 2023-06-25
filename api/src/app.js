const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const server = express();

// server.use(cors())
server.use(morgan('dev'));
server.use(express.json());

// cors
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-Width, Content-type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(routes);

module.exports = server;
