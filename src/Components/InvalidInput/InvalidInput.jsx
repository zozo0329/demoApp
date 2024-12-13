import React from "react";
import "./InvalidInput.css";
const InvalidInput = (props) => {
  const closeHandler = () => {
    props.setIsError(false);
  };
  let errorMessage = "";
  if (props.isUsernameError && props.isAgeError) {
    errorMessage = "Please enter username and age.";
    console.log(errorMessage, "error1");
  } else if (props.isUsernameError) {
    errorMessage = "Please enter username.";
    console.log(errorMessage, "error2");
  } else if (props.isAgeError) {
    errorMessage = "Please enter age.";
    console.log(errorMessage, "error3");
  }
  return (
    <div className="Invalid-container">
      <div className="modal">
        <div className="modal-content">
          <p>{errorMessage}</p>
          <div className="okay">
            <button onClick={closeHandler}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvalidInput;
