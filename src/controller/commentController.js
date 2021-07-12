const { Router } = require('express');
const { Comment } = require('../models');

const router = Router();

router.get('/', async (_, res) => {
  const comments = await Comment.findAll();
  res.status(200).json(comments);
});

module.exports = router;
