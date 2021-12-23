const Product = require("../models/productModel");

class ProductController {
  //GET api/

  async showProduct(req, res, next) {
    try {
      const product = await Product.find({});
      res.status(200).json({
        status: "success",
        result: product.length,
        data: product,
      });
    } catch (error) {
      res.json({ error });
    }
  }

  createProduct(req, res, next) {
    res.json({
      message: "test bug",
    });
  }

  async storeProduct(req, res, next) {
    try {
      const product = await Product.create({ ...req.body });
      res.status(200).json({
        status: "success",
        data: product,
      });
    } catch (error) {
      res.json({ error });
    }
  }

  async editProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const product = await Product.findByIdAndUpdate(productId, {
        ...req.body,
      });
      res.status(200).json({
        status: "success",
        product: { product },
      });
    } catch (error) {
      res.json({ error });
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { productId } = req.params;
      await Product.findByIdAndDelete(productId);
      res.status(200).json({
        status: "success",
        message: "Product deleted successfully",
      });
    } catch (error) {
      res.json({ error });
    }
  }
}

module.exports = new ProductController();
