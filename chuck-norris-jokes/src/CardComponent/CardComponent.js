import React from "react";

const CardComponent = props => {
  return (
    <>
      <div>{JSON.stringify(props.joke)}</div>
    </>
  );
};

export default CardComponent;
