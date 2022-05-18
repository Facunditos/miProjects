'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projectmanajers', [{
      user_id:1,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:3,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      user_id:6,
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
