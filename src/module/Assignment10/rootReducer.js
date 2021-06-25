import { combineReducers } from "redux";
import dataReducer from "./window/APIData/reducer";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
