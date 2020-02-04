const router = require("express").Router();
const programRoutes = require("./program");
 

router.use("/programs", programRoutes);

module.exports= router;