'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    sequelize,
    // modelName: 'category',
    timestamps: false,
    underscored: true,
  });
  return category;
};
