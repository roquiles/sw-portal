import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Films from "./pages/Films";
import RequireAuth from "./Auth/RequireAuth";
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";
import NotFound from "./pages/NotFound";

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
      <Route
        path="/films/:filmId"
        element={
          <RequireAuth>
            <FilmDetail />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
