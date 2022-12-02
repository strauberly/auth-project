import { useState, useRef, useContext } from "react";
import supabase from "../../client";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    // if login state sign in with password request
    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: `${enteredEmail}`,
        password: `${enteredPassword}`,
      });
      setIsLoading(false);
      if (error) {
        alert(error.message);
      } else {
        const expirationTime = new Date(
          new Date().getTime() + +data.session.expires_in
        );
        authCtx.login(data.session.access_token, expirationTime.toISOString());
        // console.log(JSON.stringify(data));
        console.log("welcome");
        history.replace("/");
      }
    } else {
      // or sign up request
      const { data, error } = await supabase.auth.signUp({
        email: `${enteredEmail}`,
        password: `${enteredPassword}`,
      });
      setIsLoading(false);
      if (error) {
        alert(error.message);
      } else {
        authCtx.login(data.session.access_token);
        // console.log(JSON.stringify(data));
        alert("account created now please login");
        console.log("welcome");
        history.replace("/");
      }
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
