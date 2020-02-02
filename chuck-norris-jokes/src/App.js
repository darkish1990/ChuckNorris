import React, { useState, useEffect } from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import JokeList from "./JokeList/Jokelist";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  const [jokeList, setJokelist] = useState({});
  const [delimiter, setDelimiter] = useState(10);
  let dataVal;

  useEffect(() => {
    fetch(`http://api.icndb.com/jokes/`).then(res =>
      res.json().then(data => {
        dataVal = data.value;
        let cats = {};
        let category;
        if (dataVal) {
          dataVal.forEach(element => {
            category =
              element.categories && element.categories.length
                ? element.categories[0]
                : "none";
            cats[category] = cats[category] || [];
            cats[category].push(element);
          });
        }
        const sortedCats = {};
        Object.keys(cats)
          .sort()
          .forEach(key => {
            sortedCats[key] = cats[key];
          });
        setJokelist(sortedCats);
      })
    );
  }, []);

  const clickedDemlimiter = event => {
    let newDelimiter = event.target.value;
    if (newDelimiter) {
      setDelimiter(newDelimiter);
    }
  };

  return (
    <div className="App">
      <Router history={history}>
        <Header
          jokeListCategories={Object.keys(jokeList)}
          clickedDemlimiter={clickedDemlimiter}
        />
        <Route
          exact
          path="/"
          render={() => (
            <JokeList
              category="All"
              jokeList={jokeList}
              delimiter={delimiter}
            />
          )}
        />
        <Route path="/:category">
          <JokeList jokeList={jokeList} delimiter={delimiter} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
