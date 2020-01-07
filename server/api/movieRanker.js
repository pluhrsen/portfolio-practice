const router = require("express").Router();
const { Franchise, Movie } = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const franchises = await Franchise.findAll({
      include: [{ model: Movie }]
    });
    res.json(franchises);
  } catch (err) {
    next(err);
  }
});

router.get("/:franchiseId", async (req, res, next) => {
  try {
    const franchiseMovies = await Movie.findAll({
      where: {
        franchiseId: req.params.franchiseId
      }
    });
    res.json(franchiseMovies);
  } catch (err) {
    next(err);
  }
});

// router.get("/:campusesId", async (req, res, next) => {
//   try {
//     const campus = await Campus.findAll({
//       where: {
//         id: req.params.campusesId
//       },
//       include: [{ model: Student }]
//     });
//     res.json(campus);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const campus = await Campus.create(req.body);
//     res.json(campus);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete("/:campusesId", async (req, res, next) => {
//   try {
//     const id = req.params.campusesId;
//     await Campus.destroy({ where: { id } });
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });
