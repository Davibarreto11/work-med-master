import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  doctor: null,
};

export default function registerMedic(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@medic/REGISTERMEDIC_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.doctor = action.payload.doctor;
      });
    case '@medic/UPDATE_MEDIC_SUCCESS': {
      return produce(state, (draft) => {
        draft.doctor = action.payload.doctor;
      });
    }
    case '@medic/REMOVE_MEDIC':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        // draft.doctor = null;
      });
    default:
      return state;
  }
}
