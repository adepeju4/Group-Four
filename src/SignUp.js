import style from "./stylesheets/signup.module.css";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";



// library.add(faGoogle)

const SignUp = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [submitted, setSubmitted] = useState(false)
  const [valid, SetValid] = useState(false)

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  const handleConfirmPasswordInputChange = (event) => {
    setValues({...values, confirmPassword: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.email && values.password && values.confirmPassword){
      SetValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className={style.container}>
      <div className={style.first}>
        <div className={style.image}>
          <img className={style.img} src="/assets/Hamburger-SignUp.jpg" />
          <Link to="/"><img className={style.img2} src="/assets/Vector.svg"/></Link>
          <div className={style.logo}>
            <p>foodine</p>
          </div>
        </div>
      </div>
      <div className={style.second}>
        <img className={style.restaurant} src="/assets/restaurant.png" />
        <img className={style.restaurant2} src="/assets/restaurant.png" />
        <div className={style.details}>
          <div className={style.h5}>
            <h5>CREATE AN ACCOUNT</h5>
          </div>
          <div className={style.form}>
            <form action="/" onSubmit={handleSubmit}>
              {submitted && valid ? <div className={style.success}>Success! See you on the other side.</div> : null}
              <div className={style.googlebutton}>
                <button type="button" className={style.btn}>
                  <div className={style.FaGoogle}>
                    <FaGoogle/>
                  </div>  
                  Sign up with google
                </button>
              </div>
              <div className={style.section0}>
                <label className={style.name}>Your name <br/>{submitted && !values.name ? <span>Please enter your name</span> : null}</label>
                <input
                  onChange={handleNameInputChange}
                  value={values.name}
                  className={style.inputName}
                  type="text"
                  id="yourname"
                  name="name"
                  placeholder="name"
                />
                
               </div>
              <div className={style.section1}>
                <label className={style.email}>Your email<br/> {submitted && !values.email ? <span>Please enter your email</span> : null}</label>
                <input
                  onChange={handleEmailInputChange}
                  value={values.email}
                  className={style.inputEmail}
                  type="text"
                  id="mail"
                  name="email"
                  placeholder="stuff@gmail.com.."
                />
                
              </div>
              <div className={style.section2}>
                <label className={style.password}>Your password<br/> {submitted && !values.password ? <span>Please enter a password</span> : null}</label>
                <input
                  onChange={handlePasswordInputChange}
                  value={values.password}
                  type="password"
                  id="pword"
                  name="password"
                  placeholder="password"
                  className={style.inputPassword}
                />
                
              </div>
              <div className={style.section3}>
                <label className={style.confirmPassword}>Confirm password<br/> {submitted && !values.confirmPassword ? <span>Please confirm your password</span> : null}</label>
                <input
                  onChange={handleConfirmPasswordInputChange}
                  value={values.confirmPassword}
                  type="password"
                  id="Cpword"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className={style.inputConfirmPassword}
                />
                
                
              </div>
              <div className={style.section4}>
                <button type="submit" className={style.btn2}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//Don't forget to wrap the code inside the return statement in parentheses.