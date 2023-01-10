const { Router } = require("express");
const { Activity } = require("../db");

const route = Router();

const handleError = (res, error) => {
  res.status(404).send({ error: error.message });
};

route.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let activities;
    if (!name) {
      activities = await Activity.findAll({
        attributes: ["name", "difficulty", "duration", "season"],
      });
    } else {
      activities = await Activity.findAll({ where: { name } });
    }
    if (activities.length === 0) {
      return res.status(404).send({ error: "Activity does not exist" });
    }
    res.status(200).send(activities);
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = route;

// route.get("/", async (req, res) => {
//   try {
//     const { name } = req.query;
//     if (!name) {
//       const activities = await Activity.findAll({
//         attributes: ["name", "difficulty", "duration", "season"],
//       });
//       if (activities.length === 0) {
//         res.status(404).send({ error: "Activity does not exist" });
//       } else {
//         res.status(200).send(activities);
//       }
//     }
//     if (name) {
//       const activities = await Activity.findAll({
//         where: {
//           name,
//         },
//       });
//       if (activities.length === 0) {
//         res.status(404).send({ error: "Activity does not exist" });
//       } else {
//         res.status(200).send(activities);
//       }
//     }
//   } catch (error) {
//     res.status(404).send({ error: error.message });
//   }
// });

// module.exports = route;
