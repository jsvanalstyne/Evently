const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
const usersRoutes = require("./users.js");
const payments = require("./payments.js");
 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes);
router.use("/users", usersRoutes);

module.exports= router;