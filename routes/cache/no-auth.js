module.exports = (req, res, next) => {
    let cache = req.app.get("cache");

    cache.get(req.originalUrl, (err, data) => {
        if(err) {
            req.error = err
            next();
        }

        if(data) {
            return res.json(JSON.parse(data)).status(200)
        } 

        console.log("cache 16 " + req.originalUrl);
        next();

    })
}