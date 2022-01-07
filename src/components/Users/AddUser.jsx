import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();

  function formSumbitHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid Input",
        message: "Please enter valid input",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  function removeModalHandler() {
    setIsError(null);
  }
  return (
    <React.Fragment>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onConfirm={removeModalHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={formSumbitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="sumbit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
