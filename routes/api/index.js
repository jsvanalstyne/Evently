const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes)

module.exports= router;