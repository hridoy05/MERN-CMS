const express = require('express');
const { isAdmin, requireSignin } = require('../middleware');
const categoryRouter = express.Router();

const { createCategory, readCategories, removeCategory } = require('../controllers/categoryController');

categoryRouter.post('/category', requireSignin, isAdmin, createCategory);

categoryRouter.get('/categories', readCategories);

categoryRouter.delete('/category/:slug', requireSignin, isAdmin, removeCategory);

module.exports = categoryRouter;
