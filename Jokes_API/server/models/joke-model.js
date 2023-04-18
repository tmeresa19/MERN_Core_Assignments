import { model, Schema } from "mongoose";

const jokeSchema = Schema(
  {
    //this constructor can optionally take a second argument both arguments should be objects
    setUp: {
      type: String,
      // required: [true, "Setup is required"],
      // minLength: [10, "The setup should be at least 10 characters, please, enter now"],
    },
    punchLine: {
      type: String,
      // required: [true, "Punchline is required"],
      // minLength: [3, "The setup should be at least 10 characters"],
    },
  },
  { timestamps: true }
);

//create our model
const Joke = model("Joke", jokeSchema);

export default Joke;
