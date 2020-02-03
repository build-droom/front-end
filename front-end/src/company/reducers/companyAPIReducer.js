import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  error: "",
  isLoading: false,
  data: []
};

export const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.payload
      };
      case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  }
};
///asdsads