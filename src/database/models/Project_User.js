'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project_User.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Project_User',
    paranoid:true
  });
  return Project_User;
};