import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Films from "./pages/Films";
import RequireAuth from "./pages/RequireAuth";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/films"
        element={
          <RequireAuth>
            <Films />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
