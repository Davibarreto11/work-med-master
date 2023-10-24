import Sequelize, { Model } from 'sequelize';

class Room extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        number: Sequelize.INTEGER,
        floor: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Room;
