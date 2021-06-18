const express = require('express');
const CommentController = require('./controllers/CommentController');

const router = express.Router();

router.get('/index', CommentController.index);
router.post('/comments', CommentController.store);

module.exports = router;
