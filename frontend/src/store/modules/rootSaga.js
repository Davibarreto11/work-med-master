import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import Medic from './register/registerMedic/sagas';
import Patient from './register/registerPatient/sagas';
import Room from './register/registerRoom/sagas';
import Surgery from './register/registerSurgery/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    Medic,
    Patient,
    Room,
    Surgery,
  ]);
}
