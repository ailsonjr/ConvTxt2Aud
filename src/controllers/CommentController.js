const Comment = require('../models');

module.exports = {
  async store(req, res) {
    const { comment_text } = req.body;

    const comment = await Comment.create({ comment_text });

    return res.json(comment)
  }
};
