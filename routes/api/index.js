const router = require("express").Router();
const programRoutes = require("./program");
const eventRoutes = require("./events");
const squarePay = require("./payment");
const users = require("./users");
const conversations = require("./conversations");
const messages = require("./messages");
const bills = require("./bills");

 

router.use("/programs", programRoutes);
router.use("/events", eventRoutes)
router.use("/payments", squarePay);
router.use("/users", users);
router.use("/conversations", conversations);
router.use("/messages", messages);
router.use("/bills", bills);

module.exports= router;