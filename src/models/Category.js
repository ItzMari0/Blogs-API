'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    // modelName: 'category',
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
    as: 'postCategories',
    foreignKey: 'category_id',
    })
  };

  return Category;
};
