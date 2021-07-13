const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  res.render('home', {
    message: 'Hello World from home.js'
  })
});

module.exports = router;