const express = require('express');
const CommentController = require('./controllers/CommentController');

const routes = express.Router();

routes.post('/comments', CommentController.store);

module.exports = routes;
