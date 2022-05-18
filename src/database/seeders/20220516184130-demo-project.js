'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [{
      name: 'Node-server',
      description:'In this project...',
      projectmanajer_id:1,
      status:'Enable',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      name: 'Java-server',
      description:'In this project...',
      projectmanajer_id:2,
      status:'Finished',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      name: 'Python-server',
      description:'In this project...',
      projectmanajer_id:3,
      status:'Enable',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      name: 'Ruby-server',
      description:'In this project...',
      projectmanajer_id:1,
      status:'Enable',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      name: 'e-commerce ONG',
      description:'In this project...',
      projectmanajer_id:2,
      status:'Finished',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      name: 'e-commerce Coto',
      description:'In this project...',
      projectmanajer_id:3,
      status:'Enable',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});
    
  }
};