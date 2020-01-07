import React from "react";
import { connect } from "react-redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { HashRouter as Router, Link } from "react-router-dom";
import { fetchSingleFranchise } from "../redux/singleFranchise";

const data = [
  { rank: 1, rtRating: 98 },
  { rank: 2, rtRating: 90 },
  { rank: 3, rtRating: 77 },
  { rank: 4, rtRating: 88 },
  { rank: 5, rtRating: 70 },
  { rank: 6, rtRating: 53 }
];

class UnconnectedSingleMovieChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let franchiseId = this.props.location.pathname.slice(14, -6);
    this.props.fetchSingleFranchise(franchiseId);
    console.log("num?", franchiseId);
    console.log(this.props);
  }
  render() {
    const movies = this.props.movies;
    console.log("movies?", movies);
    const noMovies = (
      <div>
        <h2>There are no movies for this franchise in the database!</h2>
        <h3>You should add some...</h3>
      </div>
    );

    return movies === undefined || movies.length < 1 ? (
      noMovies
    ) : (
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={movies.map(movie => {
            return `${movie.myRanking}`;
          })}
          tickFormat={movies.map(movie => {
            return `${movie.title}`;
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
