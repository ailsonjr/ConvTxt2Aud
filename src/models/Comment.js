const Comment = (sequelize, DataTypes) => {
  return sequelize.define('Comment', {
    comment: DataTypes.TEXT
  });
};

module.exports = Comment;
