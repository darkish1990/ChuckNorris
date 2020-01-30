import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const JokeList = props => {
  return (
    <>
      <h1>{props.category}</h1>
      {props.jokeList ? (
        props.jokeList.map((joke, index) => {
          return <CardComponent props={joke} key={index}></CardComponent>;
        })
      ) : (
        <div></div>
      )}
    </>
  );
};

export default JokeList;
