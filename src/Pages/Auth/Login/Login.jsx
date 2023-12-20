import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import "./Login.scss";
import newDAHD from "../../../images/newDAHD_logo.svg";
import nddb_logo from "../../../images/nddb_logo.svg";
import bharat_pashudhan from "../../../images/bharat_pashudhan.svg";
import SubmitButton from "../../../Components/Button/SubmitButton";
import api from "../../../Utils/CommonApi";
import { encryptText } from "../../../Utils/CommonHelper";
import { saveAuthData } from "../../../Utils/AuthHelper";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const userIdEnterHandler = (event) => {
    setUserName(event.target.value);
    setIsUserValid(true);
  };
  const passwordEnterHandler = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const url = "admin/livestock/login";
      const obj = { userName: userName, password: encryptText(password) };
      const response = await api.post(url, obj);
      if (response.status === 200) {
        var myHeaders = { "authorization": `Bearer ${response.data.access_token}` }
        const authResponse = await axios({
          url: `${process.env.REACT_APP_URI}admin/user/userAutherization`,
          method: 'GET',
          headers: myHeaders,
        })
        saveAuthData(response?.data?.access_token, null, authResponse?.data?.data, response?.data?.refresh_token);
        return redirect("/");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
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
              <form onSubmit={onLogin}>
                <div className="form-group">
                  <label htmlFor="userName" className="label-color">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    onChange={userIdEnterHandler}
                    placeholder="Enter User ID"
                    value={userName}
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
                    onChange={passwordEnterHandler}
                    value={password}
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
                <SubmitButton className="login-signup-button">
                  Login
                </SubmitButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
