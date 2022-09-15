const express = require('express');
const { isAdmin, requireSignin } = require('../middleware');
const categoryRouter = express.Router();

const { createCategory, readCategories, removeCategory, updateCategory } = require('../controllers/categoryController');

categoryRouter.post('/category', requireSignin, isAdmin, createCategory);

categoryRouter.get('/categories', readCategories);

categoryRouter.delete('/category/:slug', requireSignin, isAdmin, removeCategory);

categoryRouter.put('/category/:slug', requireSignin, isAdmin, updateCategory);

module.exports = categoryRouter;
