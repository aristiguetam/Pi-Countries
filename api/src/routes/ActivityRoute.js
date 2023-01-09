const { Router } = require("express");
const { Activity } = require("../db");

const route = Router();

route.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addCountry(countries);
    res.status(200).send(newActivity);
  } catch (error) {
    res.status(400).send(error.messege);
  }
});

module.exports = route;
