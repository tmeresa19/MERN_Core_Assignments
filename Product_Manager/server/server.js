import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose-config.js";
import productRouter from "./routes/product-routes.js";
import cors from "cors"; //croos-origin resource sharing --so that backend can allow others to share it's rources. //This is required becuase the front end and the backend ports are different

//create the app
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json(), cors()); //these two app.use...lines are our middlewares
app.use("/api/products", productRouter); //telling the app to use the router for anything that ends with the path called '/api/products

app.get("/api/message", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

//to start/connect our server and database, we need to import the databse method named dbConnect.
async function serverStart() {
  try {
    dbConnect(); //executing/invoking the function to connect to db
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); //to start up the server
  } catch (err) {
    console.log(err);
  }
}

serverStart(); //invoke/execute the function
