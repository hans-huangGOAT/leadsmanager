import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [password2, setPwd2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      props.createMessage({ passwordsNotMatch: "Passwords do not match." });
    } else {
      const newUser = {
        username,
        email,
        password,
      };

      props.register(newUser);
    }
  };

  const propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

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
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPwd(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
