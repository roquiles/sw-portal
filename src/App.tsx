import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import FilmsProvider from "./Films/FilmsProvider";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FilmsProvider>
          <GlobalStyles />
          <AppRoutes />
        </FilmsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
