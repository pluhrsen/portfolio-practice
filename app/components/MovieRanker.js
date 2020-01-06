import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import { fetchFranchises } from "../redux/franchises";

class UnconnectedMovieRanker extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchFranchises();
  }
  render() {
    console.log(this.props.franchises);
    const franchises = this.props.franchises;
    const noFranchises = (
      <div>
        <h3>There are no franchises in the database!</h3>
      </div>
    );

    return franchises === undefined || franchises.length < 1 ? (
      noFranchises
    ) : (
      <Router>
        <div>
          <nav>Movie Ranker</nav>
          <main>
            <div>Links to Franchise Ranks</div>
            <div>
              {franchises.map(franchise => {
                return <div key={franchise.id}>{franchise.title}</div>;
              })}
            </div>
            <Link to="/">Go Back Home</Link>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    franchises: state.franchises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFranchises: () => dispatch(fetchFranchises())
  };
};

const MovieRanker = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedMovieRanker);

export default MovieRanker;
