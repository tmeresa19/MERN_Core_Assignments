import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose-config.js";
import authorRouter from "./routes/author-routes.js";
import cors from "cors";

//create the app
const app = express();
dotenv.config();

app.use(express.json(), cors()); //these two app.use...lines are our middlewares
app.use("/api/authors", authorRouter); //telling the app to use the router for anything that ends with the path called '/api/authors

app.get("/api/message", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

//to start/connect our server and database, we need to import the databse method named dbConnect.
async function serverStart() {
  try {
    await dbConnect(); //executing/invoking the function to connect to db. Without await keyword, it still will work but it will be a promise. so, its better to add await
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); //to start up the server
  } catch (err) {
    console.log(err);
  }
}

serverStart(); //invoke/execute the function
