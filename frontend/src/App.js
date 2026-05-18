import React from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import EmployeePage from "./pages/EmployeePage";

function App() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="app">

      <h1 className="main-title">
        AI Employee Performance System
      </h1>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

      <div className="container">
        <LoginPage />
        <EmployeePage />
      </div>

    </div>
  );
}

export default App;