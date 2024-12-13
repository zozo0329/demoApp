import React from "react";
import "./Output.css";
const Output = (props) => {
  return (
    <div className="output-hero">
      <div className="Output-container">
        {props.output.map((value, i) => {
          return (
            <h1 key={i}>
              {value.username} ({value.age} Y/O)
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
