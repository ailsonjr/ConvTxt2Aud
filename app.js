const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

require('./src/config/database');

const Comment = require('./src/controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', Comment.index);
app.get('/db', Comment.db);
app.post('/comments', Comment.store);

app.listen(3000);

module.exports = app;
