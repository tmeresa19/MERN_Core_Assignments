//first need to import express since we need the router from express.
import express from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
} from "../controllers/product-controllers.js"; //Second we need all the controller methods
//importing createProduct as an object using curly braces since we have exported it as obj (ES6 version)

const router = express.Router(); //we created the router by calling the express.Router() constructor

//since we have already got a router, we can start making routes
//this family of routes doesn't need id...only
router.route("/").post(createProduct).get(getAllProducts).get(getOneProduct);

//this family of routes needs the id parameter
router.route("/:id").get(getOneProduct).put(updateOneProduct).delete(deleteOneProduct);

export default router;
