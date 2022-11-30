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

  category.associate = (models) => {
    category.hasMany(models.PostCategories, {
    as: 'postCategories',
    foreignKey: 'category_id',
    })
  };

  return category;
};
