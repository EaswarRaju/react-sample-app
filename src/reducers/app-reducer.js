import {
  POPULAR_DETAILS_RETRIEVED,
  FEATURED_DETAILS_RETRIEVED
} from "../actions/app-actions";

const initialState = {
  popular: [],
  featured: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POPULAR_DETAILS_RETRIEVED: {
      return {
        ...state,
        popular: action.results ? action.results.data : []
      }
    }
    case FEATURED_DETAILS_RETRIEVED: {
      return {
        ...state,
        featured: action.results ? action.results.data : []
      }
    }
    default: return state;
  }
}