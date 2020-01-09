import React from "react";
import { connect } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";
import { HashRouter as Router, Link } from "react-router-dom";
import { fetchSingleFranchise } from "../redux/singleFranchise";

class UnconnectedSingleMovieChart extends React.Component {
  componentDidMount() {
    let franchiseId = this.props.location.pathname.slice(14, -6);
    this.props.fetchSingleFranchise(franchiseId);
    console.log("num?", franchiseId);
    console.log(this.props);
  }
  render() {
    const movies = this.props.movies;
    const noMovies = (
      <div>
        <h2>There are no movies for this franchise in the database!</h2>
        <h3>You should add some...</h3>
      </div>
    );

    return movies === undefined || movies.length < 1 ? (
      noMovies
    ) : (
      <Router>
        <div>
          <nav>Where do you stand?</nav>
          <main>
            <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
              <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={movies.map(movie => {
                  return `${movie.myRanking}`;
                })}
                tickFormat={movies.map(movie => {
                  return `${movie.myRanking}`;
                })}
              />
              <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={x => `${x / 1}%`}
              />

              <VictoryBar
                data={movies.map(movie => {
                  return { rank: movie.myRanking, rtRating: movie.rtRating };
                })}
                x="rank"
                y="rtRating"
              />
            </VictoryChart>
          </main>
          <Link to={`/movie-ranker/${movies[0].franchiseId}`}>
            Return to this Franchise's Ranker
          </Link>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleFranchise: id => dispatch(fetchSingleFranchise(id))
  };
};

const SingleMovieChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSingleMovieChart);

export default SingleMovieChart;
