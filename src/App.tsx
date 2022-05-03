import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
