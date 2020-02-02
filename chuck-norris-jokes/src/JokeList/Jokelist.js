import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useParams } from "react-router";

function getAllJokes(jokeList) {
  let allJokes = [];

  Object.keys(jokeList).reduce((prev, curr) => {
    prev.push(...jokeList[curr]);
    return prev;
  }, allJokes);
  return allJokes;
}
const JokeList = props => {
  let { category, delimiter } = useParams();
  category = category || props.category;
  delimiter = delimiter || props.delimiter;
  let jokes;
  if (!props.jokeList) return null;
  if (category === "All") {
    jokes = getAllJokes(props.jokeList);
    //jokes.length = delimiter;
  } else {
    if (  props.jokeList[category] &&  props.jokeList[category].length > 0 &&  delimiter) {
      jokes = props.jokeList[category].slice();
      jokes.length = delimiter;
    }
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
