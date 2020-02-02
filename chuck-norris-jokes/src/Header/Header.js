import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ jokeListCategories, clickedDemlimiter }) => {
  const checkActive = location => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };
  return (
    <>
      <div className="header">
        <NavLink to={"/"} isActive={checkActive}>
          All
        </NavLink>
        {jokeListCategories ? (
          jokeListCategories.map(category => {
            return (
              <NavLink to={"/" + category}>{category.toUpperCase()}</NavLink>
            );
          })
        ) : (
          <div></div>
        )}
        <select onChange={e => clickedDemlimiter(e)}>
          <option value="" selected disabled hidden>
            Pick
          </option>
          {[...Array(10)].map((x, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Header;
