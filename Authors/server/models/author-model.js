import { model, Schema } from "mongoose";

//instantiating one of schema object out of Schema class provided by mongoose.  So, we want to invoke this constructor. //this constructor needs an object inside the parenthesis hence adding the curly braces and then start adding fields)

//First, take a look at the wireframe what kind of filds we need then define them here
//we don't want to declare the fields just like: title: String. Why? Because, we should give it's own object with  key-value pair so that we can add validations if we need them
const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, enter author's name"], //by using an array, we can add a custom error message for validation.
    minLength: [3, "Name must be at least 3 characters"],
  }
});

//using the model function to instantiate mongoose model
const Author = model("Author", authorSchema);

export default Author;
