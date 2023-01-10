// const axios = require("axios");
// const { Country } = require("../src/db");

// // const url = "https://restcountries.com/v3.1/all";
// async function traerCountryDb() {
//   const api = await axios.get(`https://restcountries.com/v3.1/all`);
//   const dataApi = await api.data.map((dato) => {
//     return {
//       id: dato.cca3,
//       name: dato.name.common,
//       image: dato.flags.png,
//       continent: dato.region,
//       capital: dato.capital ? dato.capital[0] : "Capital not found",
//       subregion: dato.subregion ? dato.subregion : "subregion not found",
//       area: dato.area,
//       population: dato.population,
//     };
//   });

//   await Country.bulkCreate(dataApi);
//   console.log("tamos ready!");
// }

// module.exports = { traerCountryDb };
