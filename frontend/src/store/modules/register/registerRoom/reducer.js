import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  room: null,
};

export default function registerRoom(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@register/REGISTERROOM_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.room = action.payload.room;
      });
    case '@room/UPDATE_ROOM_SUCCESS': {
      return produce(state, (draft) => {
        draft.room = action.payload.room;
      });
    }
    case '@remove/REMOVE_ROOM':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.room = null;
      });
    default:
      return state;
  }
}
