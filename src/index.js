import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Livro from "./components/livros/livro";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Livro />
  </React.StrictMode>,
  rootElement
);
