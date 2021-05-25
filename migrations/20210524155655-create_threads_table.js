'use strict';

// const { threadId } = require("node:worker_threads");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('threads', {
        threadId: {
         type: Sequelize.BIGINT,
         autoIncrement: true,
         allowNull: true,
         primaryKey: true
       },
       threaduuid:{
        type: Sequelize.STRING,
        allowNull: false,
      },
       thread_title:{
        type: Sequelize.STRING,   
        allowNull: false,
       },
       thread_body: {
         type: Sequelize.STRING,
         allowNull: false
       },
       createdAt: {
         type: Sequelize.DATE,
         allowNull:false
       },
       updatedAt: {
         type: Sequelize.DATE,
       },
       deletedAt: {
         type: Sequelize.DATE,
       }
    });
 },

 down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('threads');
 }
};
