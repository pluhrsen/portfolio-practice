const db = require("./database");
const Franchise = require("./franchise");
const Movie = require("./movie");

Movie.belongsTo(Franchise);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Franchise,
  Movie
};
