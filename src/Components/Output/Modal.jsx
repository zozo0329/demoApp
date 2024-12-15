import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const closeHandler = () => {
    props.setIsOpen(false);
  };

  return (
    <div className="Modal-container">
      <div className="modal">
        <div className="modal-content">
          <p>
            {props.userData.username} ({props.userData.age} Y/O)
          </p>
          <div className="okay">
            <button onClick={closeHandler}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
