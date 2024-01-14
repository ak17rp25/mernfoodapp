import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const onChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //synethic event
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        password: userData.password,
        location: userData.geolocation,
      }),
    });
    const isUserDataValid = await response?.json();
    console.log(isUserDataValid);
    if (!isUserDataValid.success) {
      alert("Enter Valid User Data");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={userData.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger">
          SignUp
        </Link>
      </form>
    </div>
  );
}
