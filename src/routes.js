const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {
    message: 'Hello World from home.js'
  })
});

module.exports = router;