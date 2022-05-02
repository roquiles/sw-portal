import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      Hello World!
    </BrowserRouter>
  );
}

export default App;
