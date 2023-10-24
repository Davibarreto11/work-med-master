import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  patient: null,
};

export default function registerPatient(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@register/REGISTERPATIENT_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.patient = action.payload.patient;
      });
    case '@patient/UPDATE_PATIENT_SUCCESS': {
      return produce(state, (draft) => {
        draft.patient = action.payload.patient;
      });
    }
    case '@patient/REMOVE_PATIENT':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
      });
    default:
      return state;
  }
}
