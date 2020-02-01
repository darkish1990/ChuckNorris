import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useParams } from "react-router";

function getAllJokes(jokeList) {
  let allJokes = [];
  console.log(jokeList.length);
  
  Object.keys(jokeList).reduce((prev, curr) => {
    prev.push(...(jokeList[curr]));
    return prev;
  }, allJokes);
  return allJokes;
}
const JokeList = props => {
  let { category } = useParams();
  category = category || props.category;
  let jokes;
  if (!props.jokeList) return null;
  if (category === "All") {
    jokes = getAllJokes(props.jokeList);
  } else {
    jokes = props.jokeList[category];
    if (!jokes) {
      return null;
    }
  }
  return (
    <>
      <h1>{category}</h1>
      {jokes.map((joke, index) => {
        return <CardComponent joke={joke} key={index}></CardComponent>;
      })}
    </>
  );
};

export default JokeList;
