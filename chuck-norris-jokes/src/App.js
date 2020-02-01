import React, { useState, useEffect } from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import JokeList from "./JokeList/Jokelist";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function App() {
  const [jokeList, setJokelist] = useState({});
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
                : "None";
            cats[category] = cats[category] || [];
            cats[category].push(element);
          });
        }
        setJokelist(cats);
      })
    );
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Header jokeListCategories={Object.keys(jokeList)} />
        <Route
          exact
          path="/"
          render={() => <JokeList category="All" jokeList={jokeList} />}
        />
        <Route path="/:category">
          <JokeList jokeList={jokeList} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
