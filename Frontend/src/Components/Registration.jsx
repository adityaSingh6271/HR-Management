import "./Login.css";
import Logo from "../assets/LOGO.png";
import LogoRectangle from "../assets/LogoRectangle.png";
import RectangleContent from "../assets/Rectangle_Content.png";
import Scroll from "../assets/Scroll.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios for API calls

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Prepare data for the API call
    const userData = {
      fullName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );

      alert("Registration successful!");
      navigate("/login"); // Redirect to login page on success
    } catch (error) {
      setErrorMessage(error.response.data.message || "Registration failed.");
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
            <label htmlFor="full-name">Full name</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
              >
                <i
                  className={`bi ${
                    showConfirmPassword ? "bi-eye" : "bi-eye-slash"
                  }`}
                ></i>
              </button>
            </div>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <span
            className="login"
            onClick={() => navigate("/login")} // Navigate to Login page
          >
            Login
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
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

export default Registration;
