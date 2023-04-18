import Joke from "../models/joke-model.js";

//All of the controller functions are async
async function createJoke(req, res) {
  try {
    const newJoke = await Joke.create(req.body); //by passing the jason payload which is found in req.body (that comes in with the request)

    res.status(201).json(newJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllJokes(req, res) {
  try {
    const allJokes = await Joke.find();
    res.status(200).json(allJokes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneJoke(req, res) {
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id);
    res.status(200).json(joke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneJoke(req, res) {
  try {
    const { id } = req.params;
    const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneJoke(req, res) {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findByIdAndDelete(id); //findByIdAndDelete returns the document that we deleted instead of only returning a message that the doc is deleted. It's good to see the joke that we deleted
    res.status(200).json(deletedJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export { createJoke, getAllJokes, getOneJoke, updateOneJoke, deleteOneJoke }; //ES6 version . We need to use a curly brace since we are exporting as an object. When we import it somewhere, we need to use also curly braces
//after exporting these, we will import them in the joke-routes.js file and map to a route
