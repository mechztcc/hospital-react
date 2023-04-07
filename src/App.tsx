import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";

import { Routes, Outlet, Link } from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/create-account" element={<CreateAccountPage />}></Route>
    </Routes>
  );
}

export default App;
