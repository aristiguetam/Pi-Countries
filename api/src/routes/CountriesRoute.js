const { Router } = require("express");
const { Country, Activity } = require("./../db");
const axios = require("axios");
const router = Router();
const bringMeCountry = async () => {
  const api = await axios.get(`https://restcountries.com/v3.1/all`);
  const dataApi = await api.data.map((dato) => {
    return {
      id: dato.cca3,
      name: dato.name.common,
      image: dato.flags.png,
      continent: dato.region,
      capital: dato.capital ? dato.capital[0] : "Capital not found",
      subregion: dato.subregion ? dato.subregion : "subregion not found",
      area: dato.area,
      population: dato.population,
    };
  });
  return dataApi;
};

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let country = await Country.findAll();
    if (!country.length) await Country.bulkCreate(bringMeCountry());
  } catch (error) {
    console.log(error);
  }
  try {
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
