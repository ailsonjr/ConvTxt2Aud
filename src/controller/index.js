const Comment = require("../models/Comment");

class Comment_Controller {

  index(_, res) {
    res.render('index')
  }

  db(req, res) {
    Comment.findAll().then(comment => {
      res.status(200).json(comment);
    }).catch(e => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo não está certo...' })
    });
  }

  async store(req, res) {
    const { comment_text } = req.body;

    try {
      const comment = await Comment.create({ comment_text });
      return res.json(comment);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo não está certo...' })
    };
  }
}

module.exports = new Comment_Controller();
