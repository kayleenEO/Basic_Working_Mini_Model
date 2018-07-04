import React from "react";
import { render } from "react-dom";

const App = () => {
  return <h1>{`Kayleen's first Full-stack App from React: Hello World!`}</h1>;
};

render(<App />, document.getElementById("app"));

//Example without implicit return:
// const App = () => {
//   return (
//     <h1>Hello from React!</h1>
//   )
// }

// ReactDOM.render(
//   <App />,
// )
// document.getElementById('app')
