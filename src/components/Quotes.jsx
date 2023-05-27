import React from "react";

function Quotes(props) {
  return (
    <div className="quote-box">
      <div className="quote-author-img-name">
        <img src={props.imageLink} />
        <p className="author">~{props.author}</p>
      </div>
      <div className="quote-words">
        <p className="quote">{props.quote}</p>
      </div>
    </div>
  );
}

export default Quotes;
