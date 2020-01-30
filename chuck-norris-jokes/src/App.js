import React, { useState, useEffect } from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import JokeList from "./JokeList/Jokelist";
import createBrowserHistory from "history/createBrowserHistory";

function App() {
  const [jokeList, setJokelist] = useState([]);
  const [jokeListCategories, setJokelistCategories] = useState([]);
  let dataVal;
  let tempArray = [];
  const history = createBrowserHistory();

  useEffect(() => {
    fetch(`http://api.icndb.com/jokes/`).then(res =>
      res.json().then(data => {
        dataVal = data.value;
        let category;
        if (dataVal) {
          setJokelist(dataVal);
          dataVal.forEach(element => {
            category = element.categories;
            if (
              !jokeListCategories.includes(category[0]) &&
              !tempArray.includes(category[0])
            ) {
              tempArray.push(category[0]);
            }
          });
        }
        setJokelistCategories(tempArray);
        console.log(jokeListCategories);
      })
    );
  }, []);

  const ClickHandler = (e, selectedLimiter) => {
    let selectedCategory = e.target.value;
    if (selectedCategory) {
      fetch(
        `http://api.icndb.com/jokes/random/${selectedLimiter}?limitTo=[${selectedCategory}]`
      ).then(res =>
        res.json().then(data => {
          dataVal = data.value;
          setJokelist(dataVal);
        })
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Header props={jokeListCategories} clickHandler={ClickHandler} />

        <Route
          exact
          path="/"
          render={() => <jokeLiJokeList history={history} category={"all"} />}
        />
        {jokeListCategories ? (
          jokeListCategories.map((category, index) => {
            return (
              <Route
                key={index}
                exact
                path={"/" + { category }}
                render={() => (
                  <jokeLiJokeList history={history} category={category} />
                )}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </Router>
    </div>
  );
}

export default App;
