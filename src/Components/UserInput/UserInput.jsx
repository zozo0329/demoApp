import React, { useState } from "react";
import "./UserInput.css";
import InvalidInput from "../InvalidInput/InvalidInput";
const UserInput = (props) => {
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    console.log("Username: ", username);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
    console.log("Age: ", age);
  };
  // for submition
  const submitHandler = (e) => {
    e.preventDefault();
    if (!username.length || !age) {
      setIsError(true);
    }
    if (!username.length && !age) {
      setIsUsernameError(true);
      setIsAgeError(true);
      return;
    }
    if (!username.length) {
      setIsUsernameError(true);
      return;
    }
    if (!age) {
      setIsAgeError(true);
      return;
    }

    const userData = {
      username,
      age,
      id: Math.random.toString(),
    };
    props.inputHandler(userData);
    setIsUsernameError(false);
    setIsAgeError(false);
    setUsername("");
    setAge("");
  };
  const clearHandler = () => {
    props.setOutput([]);
  };
  return (
    <div className="UserInput-container">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            onChange={usernameHandler}
            value={username}
          />
          <input
            type="number"
            placeholder="Age (Years)"
            onChange={ageHandler}
            value={age}
          />
        </div>
        <div className="button-container">
          <button type="submit">Add User</button>
          <button type="button" onClick={clearHandler}>
            Clear All
          </button>
        </div>
      </form>
      {isError && (
        <InvalidInput
          setIsError={setIsError}
          isUsernameError={isUsernameError}
          isAgeError={isAgeError}
        />
      )}
    </div>
  );
};

export default UserInput;
