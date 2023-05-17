import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './user.css'

export default function UserInput({ onSaveData }) {
  const [username, setusername] = useState("");
  const [error, setError] = useState({
    usernamee: "",
    agee: "",
  });
  const [age, setAge] = useState("");
  //disablebutton
  const [formIsValid, setFormIsValid] = useState(false);
  //
  //on blur
  const [usersameIsValid, setusernameIsValid] = useState();
  //
  const usernameChangeHandler = (e) => {
    setusername(e.target.value);
    setFormIsValid(
      e.target.value.trim().length > 0 && e.target.value.trim().length > 0
    );
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);

    setFormIsValid(e.target.value.trim() > 0);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        usernamee: "you should'nt write an empty string",
        agee: "you should'nt write an empty string",
      });
      return;
    }
    if (username.trim().length < 3) {
      setError({
        usernamee: "you should enter at least 3 characters",
      });
      return;
    }

    if (age < 1) {
      setError({
        agee: "you should enter a valid age (>0).",
      });
      return;
    }
    setError({ usernamee: "", agee: "" });
    setusername("");
    setAge("");
    const data = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    onSaveData(data);
  };
//useEffect
useEffect(() => {
  
})
//
//onblur
const validateUsernameHandler = () => {
  setusernameIsValid(username.includes('@'));
};


  return (
    <div>
      {/* { error && <ErrorModal title={error.usernamee} message={error.agee}/>} */}
      <div className=" text-center mt-2 d-flex justify-content-center ">
        <form className="w-25" onSubmit={submitHandler}>
          <div  className={` control ${usersameIsValid===false?classes.invalid:' '}`}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
            onBlur={validateUsernameHandler}
              value={username}
              onChange={usernameChangeHandler}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {/* <p>{error.usernamee}</p> */}
            {error.usernamee && (
              <p className="text-danger">{error.usernamee}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputage1" className="form-label">
              Age
            </label>
            <input
              value={age}
              onChange={ageChangeHandler}
              type="number"
              className="form-control"
              id="exampleInputage1"
            />
            {error.agee && <p className="text-danger">{error.agee}</p>}
          </div>
          <button
            disabled={!formIsValid}
            type="submit"
            className="btn btn-primary"
          >
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}
