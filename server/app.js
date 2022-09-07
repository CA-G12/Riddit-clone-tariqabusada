const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routers')

const app = express()
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 2022);

app.use(express.static(join(__dirname, '..', 'client')));

app.use(router);

app.use((req, res) => {
    res.status(404).sendFile(join(__dirname, '..', 'client', 'Errors', '404.html'));
});

app.use((err, req, res, next) => {
    res.status(500).sendFile(join(__dirname, '..', 'client', 'Errors', '500.html'));
});

module.exports = app;
