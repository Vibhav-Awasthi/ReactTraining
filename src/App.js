import React from "react";
import Assignment13 from "./module/Assignment13";
class App extends React.Component {
  render() {
    return (
      <div className={"HomeContainer"}>
        <Assignment13 />
      </div>
    );
  }
}
export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import store from "./module/Assignment10/store";
// import APIData from "./module/Assignment10/window/APIData";


// const App = () => {
//   return (
//     <Provider store={store}>
//       <APIData />
//     </Provider>
//   );
// };

// export default App;
// import React from "react";
// import ContextAPI from "./module/Assignment 11";
// // import { Provider } from "react-redux";
// // import store from "./modules/Assignment10ReduxAPICall/store/store";
// // import APIData from "./modules/Assignment10ReduxAPICall/screens/APIData";
// // import Assignment9API from "./modules/Assignment9APICall";
// // import { BrowserRouter as Router } from "react-router-dom";

// const App = () => {
//   return (
//     <ContextAPI />
//     // <Provider store={store}>
//     //   <APIData />
//     // </Provider>
//     // <Router>
//     //   <Assignment9API />
//     // </Router>
//   );
// };

// export default App;
