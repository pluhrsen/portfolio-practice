import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import { fetchSingleFranchise } from "../redux/singleFranchise";

class UnconnectedSingleMovieRank extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let franchiseId = this.props.location.pathname.slice(14);
    this.props.fetchSingleFranchise(franchiseId);
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
          <nav>Single Movie Franchise</nav>
          <main>
            <div>List of movies</div>
            <div id="single-movies-container">
              {movies.map(movie => {
                return (
                  <div key={movie.id} id="single-movie-card">
                    <div>{movie.title}</div>
                    <div>{movie.director}</div>
                    <div>{movie.year}</div>
                    <img src={movie.imageUrl} />
                  </div>
                );
              })}
            </div>
            {console.log(movies)}
            <Link to={`/movie-ranker/${movies[0].franchiseId}/chart`}>
              My rank vs Rotten Tomatoes
            </Link>
            <Link to="/movie-ranker">Go Back to Movie Ranker</Link>
          </main>
        </div>
      </Router>
    );
  }
}

// const SingleMovieRank = () => {
//   return (
//     <div>
//       <nav>Single Movie Franchise</nav>
//       <main>
//         <div>List of movies</div>
//         <div> Title, Year, Img</div>
//       </main>
//     </div>
//   );
// };

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

const SingleMovieRank = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSingleMovieRank);

export default SingleMovieRank;
