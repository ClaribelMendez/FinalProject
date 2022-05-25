const axios = require("axios");
const querystring = require("querystring");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("../server/db/db-connection.js");
const path = require("path");
const fetch = require("node-fetch");
const { response } = require("express");
const app = express();
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const config = {
  CLIENT_ID: process.env.CLIENTID,
  CLIENT_SECRET: process.env.SECRET,
  REDIRECT_URI: process.env.REDIRECTURI,
};
app.use(express.static(REACT_BUILD_DIR));
//creates an endpoint for the route /api

app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

app.get("/profile", (req, res) => {
  res.json({ message: "This is the profile page" });
});

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

app.get("/genres", cors(), async (req, res) => {
  try {
    const { rows: genres } = await db.query("SELECT * FROM genres");
    res.send(genres);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/login", (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope =
    "user-read-private user-read-email playlist-modify-public playlist-modify-private";

  const queryParams = querystring.stringify({
    client_id: process.env.CLIENTID,
    response_type: "code",
    redirect_uri: process.env.REDIRECTURI,
    state: state,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get("/callback", (req, res) => {
  const code = req.query.code || null;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.REDIRECTURI,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${process.env.CLIENTID}:${process.env.SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;

        const queryParams = querystring.stringify({
          access_token,
          refresh_token,
        });

        res.redirect(`/?${queryParams}`);
      } else {
        res.redirect(`/?${querystring.stringify({ error: "invalid_token" })}`);
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/refresh_token", (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

let artistid;

app.get("/game", async (req, res) => {
  genre = req.query.genre;
  token = req.query.token;
  fetch(
    `https://api.spotify.com/v1/search?q=genre%3A%20${genre}&type=artist&limit=10&offset=11`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  ).then((response) => {
    console.log(
      response.json().then((data) => {
        res.json(data);
        console.log(data.artists);
      })
    );
  });
});

app.post("/profile", cors(), async (req, res) => {
  const newUser = { name: req.body.name };
  console.log(newUser.name);
  const result = await db.query(
    "INSERT INTO users(firstname) VALUES($1) RETURNING *",
    [newUser.name]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
