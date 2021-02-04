import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [password2, setPwd2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
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
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              name="password2"
              value={password2}
              onChange={(e) => setPwd2(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
