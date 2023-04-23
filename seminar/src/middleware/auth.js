const authMiddleware = (req, res, next) => {
    if ((req.body.username === process.env.TEST_USERNAME) &&( req.body.password === process.env.TEST_PASSWORD)) {
        console.log("[AUTH-MIDDLEWARE] Authorized User");
        next();
    }
    else {
        console.log("[AUTH-MIDDLEWARE] Not Authorized User");
        res.status(401).json({ error: "Not Authorized" });
    }
}

module.exports = authMiddleware;