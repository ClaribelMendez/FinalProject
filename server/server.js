const express = require('express');
const cors = require('cors');
require('dotenv').config()
// var bodyparser= require('body-parser')
const db = require('../server/db/db-connection.js'); 
const path = require('path');


var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
  });
spotifyApi.setAccessToken('BQDVIzmSpwaMN1F6nq6lW0FPkOU87F55s7ZpxkKGYcy6z2tUkprzRE1In5liG2Ockx6pBIE8E6p7gXI_ZuTVNxodMIwAoy1lKJcd16iVvb3soJpaCkipb8-LcHyGC9S81IYQ6h2VfZthrZl17IfxPI7YGifL4fU');




const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());
// app.use(bodyparser.json)
// app.use(bodyparser.urlencoded({extended:true}))

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
// app.get('/blogposts', cors(), async (req, res) => {
   
//     try{
//         const { rows: genres } = await db.query('SELECT * FROM genres');
//         res.send(genres);
//     } catch (e){
//         return res.status(400).json({e});
//     }
// });

app.delete('/blogposts/:id', cors(), async (req, res) =>{
    const postId = req.params.id;
    //console.log(req.params);
    await db.query('DELETE FROM posts WHERE id=$1', [postId]);
    res.status(200).end();

});

//create the POST request
app.post('/blogposts', cors(), async (req, res) => {
    const newPost = { date: req.body.date, title: req.body.title, content: req.body.content,image: req.body.image, alt: req.body.alt  }
    console.log([newPost.date, newPost.title, newPost.content, newPost.image, newPost.alt]);
    const result = await db.query(
        'INSERT INTO posts(date, title, content, image, alt) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [newPost.date, newPost.title, newPost.content,  newPost.image, newPost.alt]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

app.put('/blogposts/:postId', cors(), async (req, res) =>{
    const postsId = req.params.postId;
    const updatePost = { id: req.body.id, date: req.body.date, title: req.body.title, content: req.body.content,image: req.body.image, alt: req.body.alt   }
    //console.log(req.params);
    // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
    console.log(postsId);
    console.log(updatePost);
    const query = `UPDATE posts SET title=$1, content=$2, date=$3, image=$4, alt=$5 WHERE id = ${postsId} RETURNING *`;
    console.log(query);
    const values = [updatePost.title, updatePost.content,updatePost.date,updatePost.image, updatePost.alt];
    try{
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
    }
});

    app.get('/blogposts/:blogId', cors(), async (req, res) => {
        const blogId = req.params.blogId;
        const getId = await db.query(`SELECT * FROM posts WHERE id=${blogId}`);
        console.log("getId", getId.rows[0])
        res.send(getId.rows[0])
    })

app.get('/form',function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
    // res.send('hey im working');
    //res.send('about.html');
    //res.render('about.html');
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

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

// app.get("/api/genre", cors(), async (req, res) => {
//     // console.log(req.body.city);
//     genre = req.query.genre;
//     // let baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
//     // let apiID = `&units=imperial&appid=${apiKey}`;
//     // const userInput = (url1, url2, city) => {
//     //   let newURL = url1 + city + url2;
//     //   return newURL;
//     // };
//     // const apiURL = userInput(baseURL, apiID, city);
//     // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
//     const url = `https://api.spotify.com/v1/search?q=genre%3A%techno&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCVzQ4ZqRlUFbxqvbDUF_qKw0FdgnOn7TqwEsXZObHldaAtIjIrgzwQPhY5592t5ZQI7myFV_yHn7YnYWy-9tJXZxskwKecoCW8AlPg7JEeRqz8Yj5Rsw6L3qDrZjRe5obxdDinPKiOE0k0K42SBPWv4FiHdq8`
//     // console.log(city);
  
//     // change to api request/fetch thingy
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       res.send(data);
//     } catch (err) {
//       console.error("Fetch error: ", err);
//     }})

app.get('/blogposts', async (req, res) => {
    spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
    .then(function(data) {
      console.log('Artist information', data.body.name);
      res.json(data.body.name)
    }, function(err) {
      console.error(err);
    })})