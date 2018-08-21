'use strict';
module.exports = (sequelize, DataTypes) => {
  var Preferences = sequelize.define('Preferences', {
    userId: {
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references: {
      model: "User",
      key: "id",
      as: "userId"
    }
    },
    mixed: DataTypes.STRING,
    organic: DataTypes.STRING
  }, {});
  Preferences.associate = function(models) {
    // associations defined here
    Preferences.belongTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Preferences;
};