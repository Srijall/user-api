'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('user_table', {
      uid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      about: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
    }).then(async () => await queryInterface.createTable('user_profile', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      profilePic: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      occupation: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      uid: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'user_table' },
          key: 'uid',
        }
      }
    }))
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('user_profile');
    await queryInterface.dropTable('user_table');
  }
};
