import React, { useState } from "react";
import axios from "axios";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const response = await axios.post(
        "https://ai-employee-backend-q5jw.onrender.com/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      window.location.reload();

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (

    <div className="card">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>

  );

}

export default LoginPage;