import { combineReducers } from 'redux';
import * as types from '../constants';

function allIdsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_CREDITS_SUCCESS:
      return payload.credits ? Object.keys(payload.credits) : [];

    case types.ADD_CREDIT_SUCCESS:
      return [...state, payload.key];

    case types.DELETE_CREDIT_SUCCESS:
      return state.filter(creditId => creditId !== payload.creditId);

    default:
      return state;
  }
}

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_CREDITS_SUCCESS:
      return payload.credits;

    case types.ADD_CREDIT_SUCCESS:
      return {
        ...state,
        [payload.key]: payload.note,
      };

    case types.DELETE_CREDIT_SUCCESS:
      const { [payload.creditId]: _, ...rest } = state;
      return rest;

    default:
      return state;
  }
}

function isLoadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_CREDITS_START:
    case types.ADD_CREDIT_START:
    case types.DELETE_CREDIT_START:
      return true;

    case types.FETCH_CREDITS_FAIL:
    case types.ADD_CREDIT_FAIL:
    case types.DELETE_CREDIT_FAIL:
    case types.FETCH_CREDITS_SUCCESS:
    case types.ADD_CREDIT_SUCCESS:
    case types.DELETE_CREDIT_SUCCESS:
      return false;

    default:
      return state;
  }
}



function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_CREDITS_FAIL:
    case types.ADD_CREDIT_FAIL:
    case types.DELETE_CREDIT_FAIL:
      return payload.error;

    case types.FETCH_CREDITS_START:
    case types.ADD_CREDIT_START:
    case types.DELETE_CREDIT_START:
    case types.FETCH_CREDITS_SUCCESS:
    case types.ADD_CREDIT_SUCCESS:
    case types.DELETE_CREDIT_SUCCESS:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  allIds: allIdsReducer,
  byId: byIdReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
