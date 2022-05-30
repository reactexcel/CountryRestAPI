import * as actions from "../constant";
import { CountryState, CountCodeActions } from "../../types/country";
const initialState = {
  isLoading: false,
  countryCode: [],
  isError: false,
  messgae: "",
};

const CountryCodeReducers = (
  state = initialState,
  action: CountCodeActions
) => {
  switch (action.type) {
    case actions.GET_COUNTRY_CODE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        messgae: "",
      };

    case actions.GET_COUNTRY_CODE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countryCode: action.payload,
        isError: false,
        messgae: "",
      };

    case actions.GET_COUNTRY_CODE_DATA_ERROR:
      return {
        ...state,
        isLoading: false,

        isError: true,
        messgae: action.payload,
      };

    default:
      return state;
  }
};

export default CountryCodeReducers;
