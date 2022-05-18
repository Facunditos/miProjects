'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.ProjectManajer,{
        as:'ProjectManajer',
        foreignKey:'projectmanajer_id'
      })
      Project.belongsToMany(models.User,{
        as:'Users',
        through:'project_user',
        foreignKey:'project_id',
        otherKey:'user_id'
      })
    }
  };
  Project.init({
    name: {
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:true
      }
    },
    description: {
      type:DataTypes.TEXT,
      defaultValue:"It hasn't description"
    },
    projectmanajer_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    status: {
      type:DataTypes.STRING(30),
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    deletedAt:{
      type:DataTypes.DATE
    }
    }
  , {
    sequelize,
    modelName: 'Project',
    paranoid:true
  });
  return Project;
};