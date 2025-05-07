import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/profile"))
      .catch(() => {
        navigate("/login");
      });
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("User logged in successfully");
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Login failed:", error.response.data.message);
        alert(error.response.data.message || "Login failed");
      });
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <p>If not registered</p>
      <button
        className="register-button"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Login;