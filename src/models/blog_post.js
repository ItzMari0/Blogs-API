'use strict';
module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    sequelize,
    // modelName: 'blogPost',
    // tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    })
  };

  blogPost.associate = (models) => {
    blogPost.hasMany(models.PostCategories, {
    as: 'postCategories',
    foreignKey: 'post_id',
    })
  };

  return blogPost;
};
