const Sequelize = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  Project: require('./Project')(sequelize),
  Module: require('./Module')(sequelize),
  Phase: require('./Phase')(sequelize),
};

db.Project.associate(db);
db.Module.associate(db);
db.Phase.associate(db);

module.exports = db;
