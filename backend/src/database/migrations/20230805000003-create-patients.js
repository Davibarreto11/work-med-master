/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      adress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medic_history: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expenses: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status_post_operation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'doctors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: { model: 'rooms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      surgery_id: {
        type: Sequelize.INTEGER,
        references: { model: 'surgeries', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('patients');
  },
};
