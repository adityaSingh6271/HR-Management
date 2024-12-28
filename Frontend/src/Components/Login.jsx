import "./Login.css";
import Logo from "../assets/LOGO.png";
import LogoRectangle from "../assets/LogoRectangle.png";
import RectangleContent from "../assets/Rectangle_Content.png";
import Scroll from "../assets/Scroll.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios for API calls

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for API call
    const userData = { email, password };

    try {
      // Send login request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/login ",
        userData,
        {
          withCredentials: true,
        }
      );
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to Dashboard on success
    } catch (error) {
      setErrorMessage(error.response?.data.message || "Login failed.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img
            src={LogoRectangle}
            alt="LogoRectangle"
            className="logo-rectangle"
          />
          <img src={Logo} alt="Logo" className="logo-icon" />
        </div>
        <h1>Welcome to Dashboard</h1>
        <form className="form" onSubmit={handleSubmit}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                <i
                  className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                ></i>
              </button>
            </div>
          </div>

          <button type="submit" className="register-btn">
            Login
          </button>
        </form>
        <p className="login-text">
          Don't have an account?{" "}
          <span
            className="login"
            onClick={() => navigate("/")} // Navigate to Registration page
          >
            Register
          </span>
        </p>
      </div>

      <div className="right">
        <div className="right-content">
          <img
            src={RectangleContent}
            alt="Dashboard Screenshot"
            className="dashboard-image"
          />
          <p className="description">
            Welcome back to your dashboard. Please log in to continue.
          </p>
          <p className="subtext">
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <img
            src={Scroll}
            alt="Scroll Indicator"
            className="scroll-indicator"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
