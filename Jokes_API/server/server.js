import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose-config.js";

//create the app
const app = express();
dotenv.config();

const PORT = process.env.PORT;

import jokeRouter from "./routes/joke-routes.js";
app.use(express.json()); //we are not able to parse JSON body without using this json middleware
app.use("/api/jokes", jokeRouter); //telling the app to use the router for anything that ends with '/api/jokes

//to connect to database, we need to import the database method named dbConnect and invoke it.
async function serverStart() {
  dbConnect(); 
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); //to start up the server
}

serverStart(); //invoke/execute the function to start the server
