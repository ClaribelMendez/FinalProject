const express = require("express");
const cors = require("cors");
require("dotenv").config();
// var bodyparser= require('body-parser')
const db = require("../server/db/db-connection.js");
const path = require("path");
var request = require("request");
var querystring = require("querystring");
const fetch = require("node-fetch");

var SpotifyWebApi = require("spotify-web-api-node");
const { URLSearchParams } = require("url");

const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

var client_id = "5d41a60ef3b04d87bafe4f28b56ee81a";
var redirect_uri = "http://localhost:4002/blogposts";
var client_secret = "29972a14b1934a21b8c1a72cb7bcfbce";

redirect_uri = process.env.REDIRECT_URI || "http://localhost:4002/blogposts";

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: "user-read-private user-read-email",
        redirect_uri,
      })
  );
});

const origWarning = process.emitWarning;
process.emitWarning = function (...args) {
  if (args[2] !== "DEP0005") {
    // pass any other warnings through normally
    return origWarning.apply(process, args);
  } else {
    ("do nothing, eat the warning");
  }
};

// var credentials = {
//     clientId: client_id,
//     clientSecret: client_secret,
//     redirectUri: 'http://localhost:4002/blogposts'
//   };

//   var spotifyApi = new SpotifyWebApi(credentials);

// app.get('/blogposts', function(req, res) {

//     var code = req.query.code || null;
//   spotifyApi.authorizationCodeGrant(code).then(
//     function(data) {
//       console.log('The token expires in ' + data.body['expires_in']);
//       console.log('The access token is ' + data.body['access_token']);
//       console.log('The refresh token is ' + data.body['refresh_token']);

//       // Set the access token on the API object to use it in later calls
//       spotifyApi.setAccessToken(data.body['access_token']);
//       spotifyApi.setRefreshToken(data.body['refresh_token']);
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   )
// })
app.get("/blogposts", function (req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    var access_token = body.access_token;
    let uri = process.env.FRONTEND_URI || "http://localhost:3000";
    res.redirect(uri + "?access_token=" + access_token);
    console.log("this is the token " + access_token);
  });
});

// var spotifyApi = new SpotifyWebApi({

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});

// create the get request
app.get("/genres", cors(), async (req, res) => {
  try {
    const { rows: genres } = await db.query("SELECT * FROM genres");
    res.send(genres);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.delete("/blogposts/:id", cors(), async (req, res) => {
  const postId = req.params.id;
  //console.log(req.params);
  await db.query("DELETE FROM posts WHERE id=$1", [postId]);
  res.status(200).end();
});

//create the POST request
app.post("/blogposts", cors(), async (req, res) => {
  const newPost = {
    date: req.body.date,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    alt: req.body.alt,
  };
  console.log([
    newPost.date,
    newPost.title,
    newPost.content,
    newPost.image,
    newPost.alt,
  ]);
  const result = await db.query(
    "INSERT INTO posts(date, title, content, image, alt) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [newPost.date, newPost.title, newPost.content, newPost.image, newPost.alt]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.put("/blogposts/:postId", cors(), async (req, res) => {
  const postsId = req.params.postId;
  const updatePost = {
    id: req.body.id,
    date: req.body.date,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    alt: req.body.alt,
  };
  //console.log(req.params);
  // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
  console.log(postsId);
  console.log(updatePost);
  const query = `UPDATE posts SET title=$1, content=$2, date=$3, image=$4, alt=$5 WHERE id = ${postsId} RETURNING *`;
  console.log(query);
  const values = [
    updatePost.title,
    updatePost.content,
    updatePost.date,
    updatePost.image,
    updatePost.alt,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.get("/blogposts/:blogId", cors(), async (req, res) => {
  const blogId = req.params.blogId;
  const getId = await db.query(`SELECT * FROM posts WHERE id=${blogId}`);
  console.log("getId", getId.rows[0]);
  res.send(getId.rows[0]);
});

// app.get('/form',function (req, res) {
//     res.sendFile(path.join(__dirname, 'about.html'));
//     // res.send('hey im working');
//     //res.send('about.html');
//     //res.render('about.html');
// });

// console.log that your server is up and running

// app.get('/search', async (req, res) => {
//     spotifyApi.getAvailableGenreSeeds()
//     .then(function(data) {
//       let genreSeeds = data.body.genres[0];
//       console.log(genreSeeds);
//       res.json(genreSeeds)
//     }, function(err) {
//       console.log('Something went wrong!', err);

//     })})

// app.post('/genres', cors(),  (req, res) => {
//     spotifyApi.getAvailableGenreSeeds()
//     .then(function(data) {
//       let genreSeeds =  data.body.genres[0];
//       console.log(genreSeeds);
//       res.json(genreSeeds)
//       const genres = { genre: req.body.genres}
//       console.log('this is from post request');
//       const result =  db.query(
//           'INSERT INTO genres(genres) VALUES($1)',
//           [newPost.genres]
//       );
//       console.log(result);
//       res.json(result);
//     }, function(err) {
//       console.log('Something went wrong!', err);

// })});

//     app.post('/genres', async (req, res) => {
//         spotifyApi.getAvailableGenreSeeds()
//         .then(function(data) {
//           let genreSeeds = data.body.genres[0];
//           console.log(genreSeeds);
//         }, function(err) {
//           console.log('Something went wrong!', err);
//         });
//     try{
//         const { rows: genres } =  await db.query('Insert * FROM genres');
//         res.send(genres);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//     const genres = { genre: req.body.genres }
// // console.log([newPost.date, newPost.title, newPost.content, newPost.image, newPost.alt]);
//     const result =  await db.query(
//     'INSERT INTO genres(genres) VALUES($1)'
//     // [newPost.date, newPost.title, newPost.content,  newPost.image, newPost.alt]
// );
//     console.log(result);
//     res.json(result);
// });

// let genre;
// app.post("/api/search-genre", (req, res) => {
//   genre = req.body.genre;
//   res.redirect("/api/genre");
// });

// app.get('/form', async (req, res) => {
//     spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
//     .then(function(data) {
//       console.log('Artist information', data.body.id);
//       res.send(data.body.id)
//     }, function(err) {
//       console.error(err);
//     })})

// var async =  require('async');
// async.waterfall([
//   function firstStep(done) {
//       let artistid;

//         spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
//         .then(function(data) {
//              artistid = data.body.id

//           console.log('Artist information', artistid);
//           res.send(artistid)
//         }, function(err) {
//           console.error(err);
//         })
//     console.log('This is step 1');

//     done(null, artistid); // <- set value to passed to step 2
//   },
//   function secondStep(step1Result, done) {
//     spotifyApi.getArtistAlbums().then(
//         function(data) {
//           console.log('Artist albums', data.body);
//         },
//         function(err) {
//           console.error(err);
//         }
//       );
//     done(null, 'Value from step 2'); // <- set value to passed to step 3
//   },
//   function thirdStep (step2Result, done) {
//     console.log(step2Result);

//     done(null); // <- no value set for the next step.
//   }
// ],
// function (err) {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('No error happened in any steps, operation done!');
//   }
// });

// var client_id = 'CLIENT_ID';
// var client_secret = 'CLIENT_SECRET';
const access_token =
  "BQBAX_Oc0iuDep6nJg1-iX5JVxzo-dXpXD3OFlOEw928-Df0w-GwlP2NBpX28WiZ_Nim-ObRAqjbnYSnHpo7eysnu0ZgNNUVTnmzu2lZm5TYN7gAsCM-pj2r3w6c8ECxIAb0uaDzYepm-C1MVhAHgkSfLiak8kGJAmjmLMCxvy_ZldcyuXC4asHIykgesRO4NA";
let artistid;

app.get("/game", async (req, res) => {
  genre = req.query.genre;
  console.log("backend line 315. Genre: " + genre);
  fetch(`https://api.spotify.com/v1/artists/${genre}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => {
    console.log(
      response.json().then((data) => {
        artistid = data.id;
        console.log("Artist ID:" + artistid);
        return fetch(
          `https://api.spotify.com/v1/artists/${artistid}/top-tracks?market=ES`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + access_token,
            },
          }
        )
        .then((response) => {
          console.log(
            response.json().then((data) => {
               console.log(data)
                res.json(data)
                {console.log(data.tracks[0]['album']['images'][0]['url'])}
              // {console.log(data.tracks[0]['preview_url'])}
              // {console.log(data.tracks[1]['preview_url'])}
              // {console.log(data.tracks[2]['preview_url'])}
            })
          );
        });
      })
    );
  });
});

// app.get('/gameplay', async (req, res) => {
// fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
//             method: 'GET', headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + access_token
//             }
//         })
//             .then((response) => {
//                 console.log(response.json().then(
//                     (data) => {
//                         // res.json(data)
//                         {artistid = data.id}
//                         {console.log(data)}
//                         return fetch(`https://api.spotify.com/v1/artists/${artistid}/top-tracks?market=ES`, {
//                             method: 'GET', headers: {
//                                 'Accept': 'application/json',
//                                 'Content-Type': 'application/json',
//                                 'Authorization': 'Bearer ' + access_token
//                             }
//                         })
//                             .then((response) => {
//                                 console.log(response.json().then(
//                                     (data) => {
//                                         res.send(data)
//                                         {console.log(data.tracks[0]['preview_url'])}
//                                         {console.log(data.tracks[1]['preview_url'])}
//                                         {console.log(data.tracks[2]['preview_url'])}
//                                     }
//                                 ));
//                             });
//                     })
//             )})})

app.get("/artist-search", (req, res) => {
  fetch("https://itunes.apple.com/search?term=jack+johnson")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
