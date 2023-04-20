import { model, Schema } from "mongoose";

const productSchema = Schema(
  {
    //this constructor can optionally take a second argument both arguments will be objects
    productTitle: {
      type: String,
      required: [true, "Please, enter product title"],
    },
    productPrice: {
      type: Number,
      required: [true, "Please, enter price"],
    },
    productDescription: String, //since description field is optional, we don't have to use the curly braces (object)
  },
  { timestamps: true }
);

//create our model
const Product = model("Product", productSchema);

export default Product;
