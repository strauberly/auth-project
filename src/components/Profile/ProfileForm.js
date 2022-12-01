import { useRef } from "react";
import { useHistory } from "react-router-dom";
import supabase from "../../client";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // validation option

    const { data, error } = await supabase.auth.updateUser({
      password: `${enteredNewPassword}`,
    });
    if (error) {
      alert(error.message);
    }
    alert("password successfully changed");
    console.log("hooray");
    history.replace("/");
    // console.log(JSON.stringify(data));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
