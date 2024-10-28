// models/Module.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Module extends Model {
    static associate(models) {
      Module.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project',
      });
      Module.belongsTo(models.Phase, {
        foreignKey: 'phaseId',
        as: 'phase',
      });
    }
  }

  Module.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id',
        },
      },
      phaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'phases',
          key: 'id',
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pendiente',
      },
    },
    {
      sequelize,
      modelName: 'Module',
      tableName: 'modules',
      timestamps: true,
    }
  );

  return Module;
};
