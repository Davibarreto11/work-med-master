import Sequelize from 'sequelize';

import User from '../app/models/User';
import Surgery from '../app/models/Surgery';
import Patient from '../app/models/Patient';
import Doctor from '../app/models/Doctor';
import Room from '../app/models/Room';
import Role from '../app/models/Role';
import Procedure from '../app/models/Procedure';

import databaseConfig from '../config/database';

const models = [User, Surgery, Patient, Doctor, Room, Role, Procedure];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
