import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import newDAHD from "src/assets/newDAHD_logo.svg";
import nddb_logo from "src/assets/nddb_logo.svg";
import bharat_pashudhan from "src/assets/images/bharat_pashudhan.svg";

const Login = () => {
  const onLogin = () => {};
  return (
    <>
      <section className="login-section">
        <div className="login-header-left">
          <div className="col-12">
            <div className="dhad-logo">
              <object
                alt="text"
                aria-label="text"
                type="image/svg+xml"
                data={newDAHD}
                className="icon-dhad"
              ></object>
            </div>
          </div>
        </div>
        <div className="login-header-right">
          <div className="col-12">
            <div className="nddb-logo">
              <object
                alt="text"
                aria-label="text"
                type="image/svg+xml"
                data={nddb_logo}
                className="icon-nddb"
              ></object>
            </div>
          </div>
        </div>

        <div className="login-container ">
          <div className="col-lg-4 col-md-6  col-sm-6 col-xs-12 left-section bg-color">
            <div className="col-my">
              <div className="login-heading mb-2 text-center">
                <div className="pashudhan-logo mb-2">
                  <object
                    data={bharat_pashudhan}
                    className="icon-bharat-pashudhan"
                    alt="text"
                    aria-label="text"
                  ></object>
                </div>
                <p className="login-title mb-2">Login</p>
                <p className="login-title-desc">
                  Enter your credentials to access your account
                </p>
              </div>
              <form onSubmit={onLogin()}>
                <div className="form-group">
                  <label htmlFor="userId" className="label-color">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="Enter User ID"
                    name="username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Password" className="label-color">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="Password"
                    placeholder="Enter Password"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <Link
                    htmlFor="forgot-password"
                    className="label-color text-right"
                    to="/auth/forgot-password"
                  >
                    Forgot Password
                  </Link>
                </div>
                <button
                  className="login-signup-button btn btn-dark mb-2"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
