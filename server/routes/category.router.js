const express = require('express');
const { isAdmin, requireSignin } = require('../middleware');
const categoryRouter = express.Router();

const { createCategory, readCategories } = require('../controllers/categoryController');

categoryRouter.post('/category', requireSignin, isAdmin, createCategory);

categoryRouter.get('/categories', readCategories);

module.exports = categoryRouter;
