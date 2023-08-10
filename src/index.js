import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: "smooth"
    };
  } else {
    return { x: 0, y: 0 };
  }
};
ReactDOM.render(
  <StrictMode>
    <BrowserRouter scrollBehavior={scrollBehavior}>
      <App />
    </BrowserRouter>
    ,
  </StrictMode>,
  document.getElementById("root")
);
