//first need to import express since we need the router from express.
import express from "express";
import {
  createJoke,
  getAllJokes,
  getOneJoke,
  updateOneJoke,
  deleteOneJoke,
} from "../controllers/joke-controllers.js"; //Second we need all the controller methods
//importing createJoke and others as an object using curly braces since we have exported it as obj (ES6 version)

const router = express.Router(); //we created the router by calling the express.Router() constructor

//since we have already got a router, we can start making routes
router.route("/")
  .post(createJoke)
  .get(getAllJokes);

router.route("/:id")
  .get(getOneJoke)
  .put(updateOneJoke)
  .delete(deleteOneJoke);

export default router;
