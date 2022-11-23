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
    await queryInterface.createTable('blog_table', {
      blogID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      uid: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'user_table' },
          key: 'uid',
        },
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('blog_table')
  }
};
