import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";

import { Routes, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
