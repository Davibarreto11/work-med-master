import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import Medic from './register/registerMedic/reducer';
import Patient from './register/registerPatient/reducer';
import Room from './register/registerRoom/reducer';
import Surgery from './register/registerSurgery/reducer';

export default combineReducers({
  auth,
  user,
  Medic,
  Patient,
  Room,
  Surgery,
});
