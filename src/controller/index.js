const createComment = require("../models/createcomment");

class Comment_Controller {

  index(_, res) {
    res.render('index')
  }

  db(req, res) {
    createComment.findAll().then(comment => {
      res.status(200).json(comment);
    }).catch(e => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo não está certo...' })
    });
  }

  async store(req, res) {
    const { comment } = req.body;

    try {
      const newComment = await createComment.create({ comment });
      return res.json(newComment);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo não está certo...' })
    };
  }
}

module.exports = new Comment_Controller();
