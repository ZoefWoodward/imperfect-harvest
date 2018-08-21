'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.NUMBER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.NUMBER
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.belongsTo(models.Preferences, {
      foreignKey: "userId",
      as: "preference",
    });
  };
  return User;
};