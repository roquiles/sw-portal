import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
