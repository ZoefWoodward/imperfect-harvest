'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false 
    },
    address: {
    type: DataTypes.STRING,
    allowNull: false
    },
    city: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: { 
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {

    User.hasOne(models.Preferences, {
      foreignKey: "userId",
      as: "preference",
    });
  };
  return User;
};