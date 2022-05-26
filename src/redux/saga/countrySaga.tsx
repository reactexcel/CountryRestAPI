import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getAllCountryListSuccess,
  getAllCountryListError,
} from "../actions/countryAction";
import * as actions from "../constant";
import { CTodo, ResponseGenerator } from "../../types/country";

const getCountry = () =>
  axios.get<CTodo[]>("https://restcountries.com/v3.1/all");

function* fetchCountrySaga() {
  try {
    const response: ResponseGenerator = yield call(getCountry);
    yield put(
      getAllCountryListSuccess({
        country: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      getAllCountryListError({
        error: e.message,
      })
    );
  }
}

function* countrySaga() {
  yield all([
    takeLatest(actions.GET_ALL_COUNTRY_LIST_REQUEST, fetchCountrySaga),
  ]);
}

export default countrySaga;
