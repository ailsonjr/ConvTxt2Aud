const { Router } = require('express');
const { Comment } = require('../models');

const router = Router();

router.get('/', async (_, res) => {
  const comments = await Comment.findAll();
  res.status(200).json(comments);
});

router.post('/', async (req, res) => {
  console.log(req.params);
  const { comment } = req.params;
  const newComment = await Comment.create({ comment });
  res.status(200).json(newComment);
});

module.exports = router;
