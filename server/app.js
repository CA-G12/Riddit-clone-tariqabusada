const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express()
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 2022);

app.use(express.static(join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'I am a server test message ^_^' });
})

app.use((req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'public', 'html', 'not-found.html'));
});

app.use((err, req, res, next) => {
    res.sendFile(join(__dirname, '..', 'client', 'public', 'html', 'server-error.html'));
});

module.exports = app;
