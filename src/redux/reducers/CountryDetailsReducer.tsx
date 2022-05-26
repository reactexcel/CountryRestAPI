import * as actions from "../constant";
import { CountryState, CountStateActions } from "../../types/country";
const initialState = {
  isLoading: false,
  countryDetails: [],
  isError: false,
  messgae: "",
};

const CountryDetailsReducer = (
  state = initialState,
  action: CountStateActions
) => {
  switch (action.type) {
    case actions.GET_ALL_COUNTRY_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        messgae: "",
      };

    case actions.GET_ALL_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countryDetails: action.payload,
        isError: false,
        messgae: "",
      };

    case actions.GET_ALL_COUNTRY_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        Message: action.payload,
        isError: true,
        messgae: action.payload,
      };

    default:
      return state;
  }
};

export default CountryDetailsReducer;
