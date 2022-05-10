require('dotenv').config();
const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose")


//middleware
app.use(cors());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true}));

const port = 4003 || 4004;

const credentials = {
  clientId: 'cb79505b7a4e48258da5fc9f2d1672c2',
  clientSecret: '2b6b049411844eed80b871d782262f9c',
  redirectUri: 'http://localhost:3000',
};


//authorization routes
const AuthRoutes = require("./routes/authRoutes.js");
app.use("/", AuthRoutes)

app.listen(port,() => console.log(`Listening at port: ${port}`))