const express = require('express');
const path = require('path');
const controllers = require('./src/controller');
const app = express();
const port = 3000

require('./src/config/config.json');

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.use(express.json());

app.use('/comments', controllers.comments);

app.listen(port, console.log(`App listening on port:${port}`));

