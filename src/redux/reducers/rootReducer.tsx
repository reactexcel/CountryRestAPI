import { combineReducers } from "redux";

import CountryDetails from "./CountryDetailsReducer";

const rootReducer = combineReducers({
  CountryDetails,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
