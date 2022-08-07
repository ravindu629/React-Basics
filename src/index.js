import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//we are importing ReacrDOM into index.js to call the createRoot method on it
//this creates basically the main entry point of the overall user interface you
//are about to build with react
//it tells react where this react application this user interface which you build with react
//should be placed in the web page that is loaded

//tell react document.getElementById('root') should be the root of our react application
//the main place where the react application gets rendered to
const root = ReactDOM.createRoot(document.getElementById("root"));
//we can call render method to tell react what should be rendered in that div that we selected
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
