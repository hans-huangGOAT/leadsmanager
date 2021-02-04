import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card cardbody mt-5">
        <h2 className="text-center">Register</h2>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPwd(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
