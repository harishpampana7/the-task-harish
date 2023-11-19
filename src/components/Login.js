// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // local storage
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
      setError("");
      navigate("/products");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1
        style={{ margin: "auto", textAlign: "center", paddingBottom: "20px" }}>
        Login
      </h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
