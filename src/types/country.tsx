import * as actions from "../redux/constant";

export interface CTodo {
  region: string;
  population: string;
  title: string;
  svg: any;
  flags: {
    svg: any;
  };
  name: {
    common: string;
  };
  capital: Array<any>;
}

export interface CountryState {
  isLoading: boolean;
  countryDetails: CTodo[];
  isError: boolean;
  messgae: string | null;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export interface FetchCountrySuccessPayload {
  todos: CTodo[];
}

export interface FetchCountryFailurePayload {
  error: string;
}

export interface FetchCountryRequest {
  type: typeof actions.GET_ALL_COUNTRY_LIST_REQUEST;
}

export type FetchCountrySuccess = {
  type: typeof actions.GET_ALL_COUNTRY_LIST_SUCCESS;
  payload: FetchCountrySuccessPayload;
};

export type FetchCountryFailure = {
  type: typeof actions.GET_ALL_COUNTRY_LIST_ERROR;
  payload: FetchCountryFailurePayload;
};

export type CountStateActions =
  | FetchCountryRequest
  | FetchCountrySuccess
  | FetchCountryFailure;
