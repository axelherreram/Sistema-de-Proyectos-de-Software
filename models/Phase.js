// models/Phase.js
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Phase extends Model {
    static associate(models) {
      Phase.hasMany(models.Module, {
        foreignKey: "phaseId",
        as: "modules",
      });
    }
  }

  Phase.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "grey",
      },
    },
    {
      sequelize,
      modelName: "Phase",
      tableName: "phases",
      timestamps: false,
    }
  );

  return Phase;
};
