import { model, Schema } from "mongoose";

const jokeSchema = new Schema(
  {
    //this constructor can optionally take a second argument both arguments should be object
    setup: {
      type: String,
      required: [true, "Setup is required"],
      minLength: [
        10,
        "The setup should be at least 10 characters, please, enter now",
      ],
    },
    punchline: {
      type: String,
      required: [true, "Punchline is required"],
      minLength: [3, "The punchline should be at least 3 characters"],
    },
  },
  { timestamps: true }
);

//create  model
const Joke = model("Joke", jokeSchema);

export default Joke;
