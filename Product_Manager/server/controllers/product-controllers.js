import Product from "../models/product-model.js";

//All of the controller functions are async
async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body); //by passing the jason payload which is found in req.body (that comes in with the request)

    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneProduct(req, res) {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id); //findByIdAndDelete returns the document that we deleted instead of only returning a message that the doc is deleted. It's good to see the product that we deleted
    res.status(200).json(deletedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export { createProduct, getAllProducts, getOneProduct, updateOneProduct, deleteOneProduct }; //ES6 version . We need to use a curly brace since we are exporting as an object. When we import it somewhere, we need to use also curly braces
//after exporting these, we will import them in the product-routes.js file and map to a route
