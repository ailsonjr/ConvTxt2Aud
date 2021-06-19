require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
  host: process.env.BD_HOST,
  define: {
    timestamps: true,
    underscored: true,
  },
}
