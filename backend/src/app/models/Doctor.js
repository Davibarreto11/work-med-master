import Sequelize, { Model } from 'sequelize';

class Doctor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        speciality: Sequelize.STRING,
        cpf: Sequelize.STRING,
        gender: Sequelize.STRING,
        adress: Sequelize.STRING,
        crm: Sequelize.STRING,
        createdAt: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Doctor;
