import { createAction } from "redux-actions";
import * as actions from "../constant";

export const getAllCountryListRequest = createAction(
  actions.GET_ALL_COUNTRY_LIST_REQUEST
);
export const getAllCountryListSuccess = createAction(
  actions.GET_ALL_COUNTRY_LIST_SUCCESS
);
export const getAllCountryListError = createAction(
  actions.GET_ALL_COUNTRY_LIST_ERROR
);
export const getAllCountryCodeListRequest = createAction(
  actions.GET_COUNTRY_CODE_DATA_REQUEST
);
export const getAllCountryCodeListSuccess = createAction(
  actions.GET_COUNTRY_CODE_DATA_SUCCESS
);

export const getAllCountryCodeListError = createAction(
  actions.GET_COUNTRY_CODE_DATA_ERROR
);
