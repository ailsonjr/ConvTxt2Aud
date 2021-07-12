const express = require('express');
const path = require('path');
const controllers = require('./src/controller');
const app = express();
const port = 3000

require('./src/config/config.json');

const Comment = require('./src/controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/comments', controllers.comments);

// app.get('/', Comment.index);
// app.get('/db', Comment.db);
// app.post('/comments', Comment.store);

app.listen(port, console.log(`App listening on port:${port}`));

module.exports = app;
