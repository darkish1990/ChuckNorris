import React from "react";
import "./CardComponent.css";

const CardComponent = props => {
  return (
    <>
      <div className="card">{props.joke ? props.joke.joke.replace(/&quot;/g, '"') : null}</div>
    </>
  );
};

export default CardComponent;
