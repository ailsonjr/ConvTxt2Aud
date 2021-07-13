const { Router } = require('express');
const { Comment } = require('../models');

const router = Router();

router.get('/', async (_, res) => {
  const comments = await Comment.findAll();
  res.status(200).json(comments);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const { comment } = req.body;
  const newComment = Comment.create({ comment });
});

module.exports = router;
