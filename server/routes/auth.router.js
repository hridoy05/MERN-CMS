const express = require('express');

const authRouter = express.Router();

// controllers
const { signup, signin, currentUser } = require('../controllers/auth');
const { isAdmin, requireSignin } = require('../middleware');

authRouter.get('/', (req, res) => {
    return res.json({
        data: 'hello world from kaloraat auth API',
    });
});
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/current-admin', requireSignin, isAdmin, currentUser);

module.exports = authRouter;
