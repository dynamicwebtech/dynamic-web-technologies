/**
 *
 *  This is the Login Popup (To allow user to upload projects, delete reviews)
 *
 */

import { useState, useRef, useEffect } from "react";
import axios from "axios";

import styles from "../../../styles/modules/All/All.module.css";

export const LoginPopup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/loginUser", {
        username,
        password,
      });

      const { token } = response.data;

      // Storing the token in LS
      localStorage.setItem("Current User", token);

      document.location.reload();
    } catch (error) {
      setError("Incorrect username and/or password.");
      console.error("Login error:", error);
    }
  };

  return (
    <div id="loginPopup" className={`${styles.login_popup}`}>
      <div className={`${styles.login_popup_inner}`}>
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
          onReset={(e) => {
            setUsername("");
            setPassword("");
            setError("");
          }}
        >
          <div className={`${styles.form_set}`}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
              className="orientation-change-element half-second"
              placeholder="Username"
            />
          </div>
          <div className={`${styles.form_set}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="orientation-change-element half-second"
              placeholder="Password"
            />
          </div>

          <span
            id="loginError"
            className={`${styles.login_error} orientation-change-element`}
          >
            {error}
          </span>

          <div className={`${styles.form_btns}`}>
            <button
              type={"reset"}
              className={`${styles.clear} orientation-change-element`}
            >
              Clear
            </button>
            <button
              type={"submit"}
              className={`${styles.login} orientation-change-element`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
