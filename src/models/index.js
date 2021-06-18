const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init({
      comment_text: DataTypes.TEXT,
    }, {
      sequelize
    });
  }
}

module.exports = Comment;
