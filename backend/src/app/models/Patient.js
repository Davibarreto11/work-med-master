import Sequelize, { Model } from 'sequelize';

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        gender: Sequelize.STRING,
        adress: Sequelize.STRING,
        medic_history: Sequelize.STRING,
        contact: Sequelize.STRING,
        expenses: Sequelize.FLOAT,
        status_post_operation: Sequelize.STRING,
        created_at: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    this.belongsTo(models.Room, { foreignKey: 'room_id' });
    this.belongsTo(models.Surgery, { foreignKey: 'surgery_id' });
  }
}

export default Patient;
