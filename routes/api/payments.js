const router = require("express").Router();

router.post("/process", (req, res) => {
    console.log('we got in here');

    return res.json({"message": "fuck you"}).status(200);
})


module.exports = router;