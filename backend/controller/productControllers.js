const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    searchText = req.query.search;
    const products = await Product.find(searchText && searchText.length > 0 ? { name: new RegExp(searchText, 'i')} : {});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
