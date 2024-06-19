const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  PName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
