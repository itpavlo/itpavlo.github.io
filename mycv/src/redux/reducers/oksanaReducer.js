import { oksanaActionTypes } from '../action/oksanaActions';

const initialState = {
  movies: {
    data: [],
    total: 0,
    page: 1
  },
}

const oksanaReducer = (state = initialState, action) => {
  switch (action.type) {
    case oksanaActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.data
      }
    default:
      return state
  }
}

export default oksanaReducer
