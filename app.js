const express = require('express');
const path = require('path');
const controllers = require('./src/controller');
const app = express();
const port = 3000

require('./src/config/config.json');

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.use('/comments', controllers.comments);
// app.get('/', home);

// app.get('/', Comment.index);
// app.get('/db', Comment.db);
// app.post('/comments', Comment.store);

app.listen(port, console.log(`App listening on port:${port}`));

