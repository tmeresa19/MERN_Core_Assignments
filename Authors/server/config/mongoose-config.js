//import the connect method from mongoose
import { connect } from "mongoose"; //updated package.json file by adding a key value pair of "type": "module" so that we
import dotenv from "dotenv";
dotenv.config(); //(since mongoose-config file depends on env variables, we need to import dotenv

//can use the same ES import style that we used to in react (instead of JS's) in frontend and backend
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@titicluster0.ugzqvpg.mongodb.net/${DB_NAME}`;

//create a connection function using async (becuase the connect method is aync)
async function dbConnect() {
  try {
    await connect(DB_URI, { retryWrites: true }); //retry Writes:true means if there's something wrong writing to our database, this guarantees that we retry writing to the database
    console.log("Connected to DB");
  } catch (err) {
    console.log("DB Connection error.");
  }
}

export default dbConnect; //ES's export syntax
