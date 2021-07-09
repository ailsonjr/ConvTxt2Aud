const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const createComment = require('../models/createcomment');

const connection = new Sequelize(dbConfig);

createComment(connection);

module.exports = connection;
