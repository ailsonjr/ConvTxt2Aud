const DataTypes = require('sequelize/lib/data-types');
const createComment = (sequelize) => {

  sequelize.define('comment', {
    id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
};

module.exports = createComment;