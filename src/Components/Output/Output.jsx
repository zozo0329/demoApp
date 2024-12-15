import React, { useState } from "react";
import Modal from "./Modal";
import "./Output.css";
const Output = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(true);
    console.log(props.userData, "DATA");
  };
  return (
    <div className="output-hero">
      <div className="Output-container">
        {props.output.map((value, i) => {
          return (
            <h1 key={i} onClick={clickHandler}>
              {value.username} ({value.age} Y/O)
            </h1>
          );
        })}
        {isOpen && <Modal userData={props.userData} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Output;
