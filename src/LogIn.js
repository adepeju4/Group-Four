
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/action/userAction";
import { useHistory } from "react-router-dom";
import styles from './stylesheets/login.module.css'

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signinData, setsigninData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signinData;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setsigninData({
      ...signinData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password, history));
  };

  return (
    <div>
    <div className={styles["login-page"]}>
      <div className={styles["image-container"]}>
      <img className={styles['img']} src="/assets/Hamburger-SignUp.jpg" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
            id="password"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LogIn;
