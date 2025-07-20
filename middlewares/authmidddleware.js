const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    console.log("this is from authMiddleware");

    let token = req.headers.authorization;
    token = token?.split(" ")[1];
    console.log(token)

    if (!token) {
        return res.status(401).json({ message: "You must log in" });
    }

    try {
        const decodedToken = jwt.verify(token, "blame");
        req.user = decodedToken;
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Invalid token", error: error.message });
    }
};

module.exports = authMiddleware;
