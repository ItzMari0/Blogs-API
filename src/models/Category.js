'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
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
