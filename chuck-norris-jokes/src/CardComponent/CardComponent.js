import React from "react";

const CardComponent = props => {
  return (
    <>
      
      <div>{props.joke?props.joke.joke.replace(/&quot;/g, '"'):null}</div>
    </>
  );
};

export default CardComponent;
