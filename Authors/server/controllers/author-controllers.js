import Author from "../models/author-model.js"; //first import the model. NB to add the .js extension

//All of the controller functions are async
/**
 * This function creates a new author by passing the JSON payload in the request body and returns the
 * created author or an error message.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc. It is passed as the
 * first parameter to the createAuthor function.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and the response
 * body. In this case, `res` is used to send a JSON response with the newly created author and a status
 */

async function createAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body); //by passing the jason payload which is found in req.body (that comes in with the request)
    res.status(201).json(newAuthor);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllAuthors(req, res) {
  try {
    const allAuthors = await Author.find().sort({ title: 'asc' }); //by leaving find() empty, we get all the authors in this collection
    res.status(200).json(allAuthors);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneAuthor(req, res) {
  try {
    const { id } = req.params; //to get only one author, need to grab the id out of the parameter of the route first by deconstructing it
    const oneAuthor = await Author.findById(id); //now, I can use that id to get this author by passing the id instead of the whole js object
    res.status(200).json(oneAuthor); //In the front end, oneAuthor mean res.data when we use axios
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneAuthor(req, res) {
  try {
    const { id } = req.params; //I need the id of the author that I am trying to update
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      //for findByIdAndUpdate, we need 3 arguments: 1.ID, 2.the data that's coming from req.body, and 3.options object where we specify that we want the updated author back not the old one hence {new: true}
      new: true,
      runValidators: true, //evenif we are not creating a author, we still need to validate the data before updating using this line.
      // set runValidators to true is important when editing a form and validating the values that need to be updated.
    });
    res.status(200).json(updatedAuthor);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneAuthor(req, res) {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id); //findByIdAndDelete returns the document that we deleted instead of only returning a message that the doc is deleted. It's good to see the author that we deleted
    res.status(200).json(deletedAuthor);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
};
//ES6 version . We need to use a curly brace since we are exporting as an object.
//after exporting these, we will import them using curly braces too in the author-routes.js file and map to a route
