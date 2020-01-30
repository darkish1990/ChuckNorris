import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props, clickHandler) => {
  return (
    <>
      {props.jokeListCategories ? (
        props.jokeListCategories.map((category, index) => {
          return (
            <NavLink to={"/" + category} key={index}>
              {category}
            </NavLink>
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
