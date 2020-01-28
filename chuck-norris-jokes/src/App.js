import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import JokeList from "./JokeList/Jokelist";

const [jokeList, setJokelist] = useState([]);
const [jokeListCategories, setJokelistCategories] = useState([]);
let newJokeListArray;
let dataVal;

useEffect(() => {
  fetch("http://api.icndb.com/jokes")
    .then(res => res.json())
    .then(data => {
      dataVal = data.value;
      setJokelist(dataVal);
      let tempArray;
      if (jokeListCategories.includes(dataVal.categories[0])) {
        tempArray.push(dataVal.categories[0]);
      }
      setJokelistCategories(tempArray);
    });
});

const ClickHandler = e => {
  let selectedCategory = e.target.value;
  if (selectedCategory) {
    newJokeListArray = jokeList.filter(
      jokeCategory => jokeCategory == selectedCategory
    );
  }
};

function App() {
  return (
    <div className="App">
      <Header props={jokeListCategories} clickHandler={ClickHandler} />
      <JokeList jokeList={newJokeListArray} />
    </div>
  );
}

export default App;
