'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectManajer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectManajer.belongsTo(models.User, {
        as: "User",
        foreignKey: "user_id",
      })
      ProjectManajer.hasMany(models.Project,{
        as:'Project',
        foreignKey:'projectmanajer_id'
      })
    }
  };
  ProjectManajer.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }  
    },
    deletedAt:{
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'ProjectManajer',
    paranoid:true
  });
  return ProjectManajer;
};