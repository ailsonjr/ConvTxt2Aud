const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Comment = require('../models');

const connection = new Sequelize(dbConfig);

Comment.init(connection);

module.exports = connection;
