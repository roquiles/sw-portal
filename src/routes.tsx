import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} exact /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
