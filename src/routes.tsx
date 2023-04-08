import { Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import { Routes } from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage";
import DashboardPage from "./pages/DashboardPage";

export default function RoutesApp() {
  document.title = "Hospital Dashboard";
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/create-account" element={<CreateAccountPage />}></Route>
    </Routes>
  );
}
