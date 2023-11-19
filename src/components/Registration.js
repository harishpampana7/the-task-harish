import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      localStorage.setItem(username, JSON.stringify({ username, password }));
      navigate("/login");
    }
  };

  return (
    <div className="registration-container">
      <h1
        style={{ margin: "auto", textAlign: "center", paddingBottom: "20px" }}>
        Registration
      </h1>
      <form className="registration-form">
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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegistration}>
          Register
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Registration;
