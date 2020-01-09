import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import { fetchSingleFranchise } from "../redux/singleFranchise";

class UnconnectedSingleMovieRank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  componentDidMount() {
    let franchiseId = this.props.location.pathname.slice(14);
    this.props.fetchSingleFranchise(franchiseId);
    this.setState({ movies: this.props.movies });
  }

  onDragStart = (e, index) => {
    this.draggedItem = this.props.movies[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.props.movies[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.props.movies.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ movies: items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  render() {
    let movies = this.props.movies;
    console.log("after", this.state);
    console.log("movies", movies);
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
              <ul>
                {movies.map((movie, idx) => {
                  return (
                    <li key={movie.id}>
                      <div
                        id="single-movie-card"
                        className="drag"
                        draggable={true}
                        onDragStart={e => this.onDragStart(e, idx)}
                        onDragEnd={this.onDragEnd}
                      >
                        <div>{movie.myRanking}</div>
                        <img src={movie.imageUrl} />
                        <div>{movie.title}</div>
                        <div>{movie.director}</div>
                        <div>{movie.year}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
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
