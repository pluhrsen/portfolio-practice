import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import MovieRanker from "./MovieRanker";
import SingleMovieRank from "./SingleMovieRank";
import store from "../store";
// import { fetchFranchises } from "../redux/franchises";
// import { connect } from "react-redux";

class Root extends React.Component {
  // componentDidMount() {
  //   this.props.fetchFranchises();
  // }
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

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchFranchises: () => dispatch(fetchFranchises())
//   };
// };

// const Root = connect(null, mapDispatchToProps)(UnconnectedRoot);

export default Root;
