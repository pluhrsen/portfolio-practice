import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import MovieRanker from "./MovieRanker";
import SingleMovieRank from "./SingleMovieRank";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <div id="root-routes">
              <Route exact path="/movie-rank" component={MovieRanker} />
              <Route exact path="/" component={Main} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;
