import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ jokeListCategories, clickHandler }) => {
  jokeListCategories.sort();
  return (
    <>
      <NavLink to={"/"}>All</NavLink>
      {jokeListCategories ? (
        jokeListCategories.map((category, index) => {
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
