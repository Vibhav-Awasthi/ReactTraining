import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./reducer";
import Counter from "./Components/Counter";
const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);