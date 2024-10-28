// models/Project.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.Module, {
        foreignKey: 'projectId',
        as: 'modules',
      });
    }
  }

  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'En progreso',
      },
    },
    {
      sequelize,
      modelName: 'Project',
      tableName: 'projects',
      timestamps: true,
    }
  );

  return Project;
};
