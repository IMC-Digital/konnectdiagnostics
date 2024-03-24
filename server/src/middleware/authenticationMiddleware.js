require('dotenv').config();
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATEKEY;

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ TokenError: "not Authenticated, Login!" });
    } else {
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) {
                // console.log({ TokenIncorrectError: "token not correct" });
                return res.json({ Error: "Bad Request!" });
            } else {
                // console.log("verified");
                req.user_id = decoded.user_id;
                req.user_name = decoded.user_name;
                req.cart_id = decoded.cart_id;
                next();
            }
        });
    }
};

module.exports = { verifyUser };