import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../Headers/HeaderLogin";

const Login = () => {
  useEffect(() => {
    document.title = "Kafene pharmacy";
  }, []);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    userName: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!inputValue.userName || !inputValue.password) {
      alert(`Please enter both username and password.${inputValue.userName}`);
      return;
    }

    if (inputValue.userName === "qaif" && inputValue.password === "qaif") {
      alert(`Login Successful...${inputValue.userName}`);
      navigate("/order");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <>
      <HeaderLogin />
      <div id="login-box">
        <form className="login-page" id="form">
          <h1>Sign In</h1>
          <input
            className="login-field"
            type="text"
            name="userName"
            value={inputValue.userName}
            placeholder="Enter Username"
            onChange={handleInput}
          />
          <input
            className="login-field"
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Enter Password"
            onChange={handleInput}
          />
          <input
            className="login-btn"
            type="submit"
            value="Login"
            onClick={submitForm}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
