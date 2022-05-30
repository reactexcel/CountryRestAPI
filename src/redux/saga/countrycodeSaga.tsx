import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getAllCountryCodeListSuccess,
  getAllCountryCodeListError,
} from "../actions/countryAction";
import * as actions from "../constant";
import { CTodo, ResponseGenerator } from "../../types/country";

const getCountryCode = async (data: any) => {
  return await axios.get<CTodo[]>(
    `https://restcountries.com/v3.1/alpha/${data.payload}`
  );
};

function* fetchCountryCodeSaga(data: any) {
  try {
    const response: ResponseGenerator = yield call(getCountryCode, data);
    if (response.data && response.data.length)
      yield put(
        getAllCountryCodeListSuccess({
          countryCode: response.data,
        })
      );
  } catch (e: any) {
    yield put(
      getAllCountryCodeListError({
        error: e.message,
      })
    );
  }
}

function* countrycodeSaga() {
  yield all([
    takeLatest(actions.GET_COUNTRY_CODE_DATA_REQUEST, fetchCountryCodeSaga),
  ]);
}

export default countrycodeSaga;
