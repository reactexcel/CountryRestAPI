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

export type DarkModeType = {
  mode: boolean;
};

export type DarkModeHeaderType = {
  darkMode: boolean;
  onClick: () => void;
};
export interface companycode {
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

export interface CountryCodeSuccessPayload {
  todos: companycode[];
}

export interface CountryCodeFailurePayload {
  error: string;
}

export interface CountryCodeRequest {
  type: typeof actions.GET_COUNTRY_CODE_DATA_REQUEST;
}

export interface CountryCodeRequest {
  type: typeof actions.GET_COUNTRY_CODE_DATA_REQUEST;
}

export type CountryCodeSuccess = {
  type: typeof actions.GET_COUNTRY_CODE_DATA_SUCCESS;
  payload: CountryCodeSuccessPayload;
};

export type CountryCodeFailure = {
  type: typeof actions.GET_COUNTRY_CODE_DATA_ERROR;
  payload: CountryCodeFailurePayload;
};

export type CountCodeActions =
  | CountryCodeRequest
  | CountryCodeSuccess
  | CountryCodeFailure;
