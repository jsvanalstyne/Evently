const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
const squarePay = require("./payment");
const users = require("./users");
// const promos = require("./promo")
 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes)
router.use("/payments", squarePay);
router.use("/users", users);
// router.use("/promos", promos);

module.exports= router;