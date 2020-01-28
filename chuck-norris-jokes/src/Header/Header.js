import React from "react";

const Header = (props, clickHandler) => {
  return (
    <>
      {props.categories.map((category, index) => {
        <button onClick={e => clickHandler(e)} key={index}>
          {category}
        </button>;
      })}
    </>
  );
};

export default Header;
