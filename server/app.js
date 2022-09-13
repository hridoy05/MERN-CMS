// express
const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth.router');
// database
app.use(express.json());
app.use(cors());
app.use('/api/v1', authRouter);
module.exports = app;
