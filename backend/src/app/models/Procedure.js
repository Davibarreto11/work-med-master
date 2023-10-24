import Sequelize, { Model } from 'sequelize';

class Procedure extends Model {
  static init(sequelize) {
    super.init(
      {
        expenses: Sequelize.FLOAT,
        status_post_operation: Sequelize.STRING,
        patient_id: Sequelize.INTEGER,
        doctor_id: Sequelize.INTEGER,
        room_id: Sequelize.INTEGER,
        surgery_id: Sequelize.INTEGER,
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
    this.belongsTo(models.Patient, { foreignKey: 'patient_id' });
    this.belongsTo(models.Surgery, { foreignKey: 'surgery_id' });
  }
}

export default Procedure;
