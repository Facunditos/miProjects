'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('project_user', [{
      user_id:2,
      project_id:1,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:2,
      project_id:4,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:3,
      project_id:4,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:1,
      project_id:2,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:6,
      project_id:2,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:1,
      project_id:5,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:2,
      project_id:5,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:5,
      project_id:5,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:1,
      project_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:2,
      project_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:3,
      project_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:4,
      project_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:5,
      project_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:1,
      project_id:6,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('project_user', null, {});
    
  }
};
