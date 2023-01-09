const { Router } = require("express");
const { Country, Activity } = require("./../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      const countries = await Country.findAll({
        attributes: [
          "id",
          "name",
          "image",
          "continent",
          "capital",
          "subregion",
          "area",
          "population",
        ],
        include: [
          {
            model: Activity,
          },
        ],
      });
      res.status(200).send(countries);
    }
    if (name) {
      // const upper = name[0].toUpperCase();
      // const slice = name.slice(1);
      // const concat = `${upper}${slice}`;
      const concat = name
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" ");
      const countries = await Country.findAll({
        where: {
          name: concat,
        },
        include: [
          {
            model: Activity,
            attributes: ["name"],
          },
        ],
      });
      if (countries.length === 0) {
        res.status(404).send({ error: "Country does not exist" });
      } else {
        res.status(200).send(countries);
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const idMayuscula = id.toUpperCase();
    const countryId = await Country.findOne({
      where: {
        id: idMayuscula,
      },
      include: [
        {
          model: Activity,
        },
      ],
    });
    if (!countryId) {
      res.status(404).send({ error: "Country does not exist" });
    } else {
      res.status(200).send(countryId);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
