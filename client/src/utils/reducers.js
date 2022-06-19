import { UPDATE_STAMINA, UPDATE_TOKENS } from "./actions";

const initialState = {
  stamina: 35,
  spiritTokens: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STAMINA:
      return {
        ...state,
        stamina: action.stamina,
      };
    case UPDATE_TOKENS:
      return {
        ...state,
        spiritTokens: [...action.spiritTokens],
      };
    default:
      return state;
  }
};
export default reducers;
