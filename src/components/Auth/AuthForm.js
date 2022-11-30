import { useState, useRef } from "react";
import supabase from "../../client";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: add validation logic
    // console.log(enteredEmail);
    // console.log(enteredPassword);

    setIsLoading(true);
    if (isLogin) {
    } else {
      // sign in from supabase
      const { data, error } = await supabase.auth.signUp({
        email: `${enteredEmail}`,
        password: `${enteredPassword}`,
      });
      // console.log(data);
      setIsLoading(false);
      if (data && error) {
        alert(error.message);
      } else {
        console.log(JSON.stringify(data));
      }
      // if (data.signup.status === 200) {
      //   console.log(JSON.stringify(data));
      // } else {
      //   let errorMessage = "Authentication failed!";
      //   if (data && error) {
      //     errorMessage = error.message;
      //   }
      //   alert(errorMessage);
      // error modal goes here
      // console.log(error);
      // console.log(JSON.stringify(data));
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
