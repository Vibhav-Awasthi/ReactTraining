import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger();
const Middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, Middlewares);

export default store;
