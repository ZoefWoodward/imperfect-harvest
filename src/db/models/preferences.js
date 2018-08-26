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

    mixed: {
      type: DataTypes.STRING,
    },

    organic: {
      type: DataTypes.STRING.INTEGER
    }
  }, {});
  Preferences.associate = function(models) {
    // associations defined here
    Preferences.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Preferences;
};