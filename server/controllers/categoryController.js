const Category = require('../models/category');
const slugify = require('slugify');
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await new Category({
            name,
            slug: slugify(name),
        }).save();
        res.json(category);
    } catch (error) {
        console.log(error);
    }
};

exports.readCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
};

exports.removeCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const category = await Category.findOneAndDelete({ slug });
        res.json(category);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const { name } = req.body;
        const category = await Category.findOneAndUpdate({ slug }, { name, slug: slugify(name) }, { new: true });
        res.json(category);
    } catch (err) {
        console.log(err);
    }
};
