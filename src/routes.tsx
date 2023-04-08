import { Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import { Routes } from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/create-account" element={<CreateAccountPage />}></Route>
    </Routes>
  );
}
