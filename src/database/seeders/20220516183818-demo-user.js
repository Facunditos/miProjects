'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      first_name: 'Martín',
      last_name:'Taparelli',
      email:'martintaparelli@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
     },{
      first_name: 'Maite',
      last_name:'López',
      email:'maitelopez@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },{
      first_name: 'Agustín',
      last_name:'Fernández',
      email:'agustinfernandez@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },{
      first_name: 'Javier',
      last_name:'Kleir',
      email:'javierkleier@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },{
      first_name: 'Santiago',
      last_name:'Landucci',
      email:'santiagolanducci@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },{
      first_name: 'Ignacio',
      last_name:'Belloqui',
      email:'ignaciobeloqui@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },{
      first_name: 'Julián',
      last_name:'Mattos',
      email:'julianmattos@gmail.com',
      password:'martin1234',
      createdAt:new Date,
      updatedAt:new Date,
      deletedAt:null
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
