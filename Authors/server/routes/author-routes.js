//first need to import express since we need the router from express.
import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
} from "../controllers/author-controllers.js";
//second, import the above controller methods as object using curly braces since we have exported it as obj (ES6 version)

const router = express.Router(); //we created the router by calling the express.Router() constructor

//since we have already got a router, we can start making routes

//this family of routes doesn't need id
router
  .route("/") //means api slash authors slash nothing after /
  .post(createAuthor) //we are mapping the post, get, put, and delete methods with their associated controller functions
  .get(getAllAuthors)
  .get(getOneAuthor);

//this family of routes needs the id parameter
router
  .route("/:id") //means api slash authors slash id
  .get(getOneAuthor)
  .put(updateOneAuthor)
  .delete(deleteOneAuthor);

export default router;
