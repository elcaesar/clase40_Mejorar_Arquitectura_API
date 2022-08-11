require("dotenv").config();

const express = require("express");

const userRouter = require("./routes/user");
const connectMongo = require("./config/connectMongo");
const connectFirebase = require("./config/connectFirebase");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);

// Conexion a Mongo con Mongoose
const mongo = new connectMongo();
mongo.connect();

//Conexion a Firebase
// const firebase = new connectFirebase();
// firebase.connect();

app.listen(PORT, () => console.log("Server up to", PORT));
