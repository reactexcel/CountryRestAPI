import { combineReducers } from "redux";

import CountryDetails from "./CountryDetailsReducer";
import CountryCodeReducers from "./CountryCodeReducers";

const rootReducer = combineReducers({
  CountryDetails,
  CountryCodeReducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
