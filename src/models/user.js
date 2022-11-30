'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    // modelName: 'user',
    // tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.Blogpost, {
      as: 'blogPosts',
      foreignKey: 'user_id',
    })
  };
  return user;
};
