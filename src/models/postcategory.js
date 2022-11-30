'use strict';
module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    // modelName: 'postCategory',
    timestamps: false,
    underscored: true,
  });

  postCategory.associate = (models) => {
    postCategory.belongsTo(models.BlogPosts, {
      as: 'blogPosts',
      foreignKey: 'post_id',
    })
  };

  postCategory.associate = (models) => {
    postCategory.belongsTo(models.Categories, {
      as: 'categories',
      foreignKey: 'category_id',
    })
  };

  return postCategory;
};
