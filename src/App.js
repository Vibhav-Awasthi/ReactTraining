// import React from "react";
// import Assignment10 from "./module/Assignment10";
// class App extends React.Component {
//   render() {
//     return (
//       <div className={"HomeContainer"}>
//         <Assignment10 />
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import { Provider } from "react-redux";
import store from "./module/Assignment10/store";
import APIData from "./module/Assignment10/window/APIData";


const App = () => {
  return (
    <Provider store={store}>
      <APIData />
    </Provider>
  );
};

export default App;
