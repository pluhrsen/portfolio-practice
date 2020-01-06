const Sequelize = require("sequelize");
const db = require("./database");

const Franchise = db.define("franchise", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn3.vectorstock.com/i/1000x1000/36/42/spaceman-isolated-on-black-background-astronaut-vector-21423642.jpg"
  }
});

module.exports = Franchise;
