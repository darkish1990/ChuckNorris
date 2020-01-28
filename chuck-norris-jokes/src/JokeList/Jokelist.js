import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const JokeList = props => {
  return (
    <>
      {props.jokeList.map((joke, index) => {
        <CardComponent props={joke} key={index}></CardComponent>;
      })}
      ;
    </>
  );
};

export default JokeList;
