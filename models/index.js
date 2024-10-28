const Sequelize = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development']; // Cargar configuración según el entorno

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

const db = {
  sequelize,
  Sequelize,
};

module.exports = db;
