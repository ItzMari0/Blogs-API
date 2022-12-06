'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type:DataTypes.STRING,
    },
    password: {
     allowNull: false,
      type: DataTypes.STRING,
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    // modelName: 'user',
    // tableName: 'users',
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId',
    })
  };
  return User;
};
