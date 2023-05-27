import React from "react";

function FunctionBox(props) {
  return (
    <div className="function-box">
      <p>{props.textTitle}</p>
      <div className="function-text-image">
        <div>
          <img src={props.image} />
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default FunctionBox;
