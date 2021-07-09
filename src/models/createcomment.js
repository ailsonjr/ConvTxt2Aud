'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class createComment extends Model { };
  createComment.init({
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'createComment',
  });
  return createComment;
};