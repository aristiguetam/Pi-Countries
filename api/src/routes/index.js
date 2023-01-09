const { Router } = require("express");
// const { Countries, Activity } = require("../db");
const routerCountries = require("./CountriesRoute");
const routerActivities = require("./ActivityRoute");
const routerAllActivity = require("./Allactivities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", routerCountries);
router.use("/activities", routerActivities);
router.use("/allactivities", routerAllActivity);

module.exports = router;
