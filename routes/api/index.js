const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
const squarePay = require("./payment");
const users = require("./users");
// const promos = require("./promo")
const conversations = require("./conversations");
const messages = require("./messages");
 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes)
router.use("/payments", squarePay);
router.use("/users", users);
// router.use("/promos", promos);
router.use("/conversations", conversations);
router.use("/messages", messages);

module.exports= router;