const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    product_name: { type: String, required: true },
    category_name: { type: String, required: true },
    product_image: { type: String, required: true },
    product_description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
