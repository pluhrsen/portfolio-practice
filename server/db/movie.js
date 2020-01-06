const Sequelize = require("sequelize");
const db = require("./database");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  director: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn3.vectorstock.com/i/1000x1000/36/42/spaceman-isolated-on-black-background-astronaut-vector-21423642.jpg"
  }
});

module.exports = Movie;
