import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  surgery: null,
};

export default function registerPatient(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@register/REGISTERSURGERY_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.surgery = action.payload.surgery;
      });
    case '@surgery/UPDATE_SURGERY_SUCCESS':
      return produce(state, (draft) => {
        draft.surgery = action.payload.surgery;
      });
    case '@remove/REMOVE_SURGERY':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.surgery = null;
      });

    default:
      return state;
  }
}
