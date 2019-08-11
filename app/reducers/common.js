// Initial State
import { initialState } from './initial';
import { ActionTypes } from '../constants/';

// Reducers (Modifies The State And Returns A New State)
const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default common;