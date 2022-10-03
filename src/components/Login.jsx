import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import axios from "axios";
export default function Login() {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/signInUser", data)
      .then((res) => {
        setData(res.data);
        setemail("");
        setPassword("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setemail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
            disabled={loading}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
