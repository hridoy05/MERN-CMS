const User = require('../models/user');
const expressjwt = require('express-jwt');
require('dotenv').config();

// req.user = _id
exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
});

exports.isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== 'Admin') {
            return res.status(403).send('Unauhorized');
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
};
