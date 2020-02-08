const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
const squarePay = require("./payment")
 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes)
router.use("/payments", squarePay)

module.exports= router;