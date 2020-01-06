import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <div>This is my portfolio</div>
          <div> intro to portfolio</div>
          <ul>
            <li>this</li>
            <li>will</li>
            <li>be a list</li>
            <li>of projects</li>
          </ul>
          <Link to="/movie-rank">Go to Movie Ranker</Link>
        </main>
      </div>
    </Router>
  );
};

export default Main;
