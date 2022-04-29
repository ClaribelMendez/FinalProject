const express = require('express');
const cors = require('cors');
require('dotenv').config()
// var bodyparser= require('body-parser')
const db = require('../server/db/db-connection.js'); 
const path = require('path');
var request = require('request');
var querystring = require('querystring');


var SpotifyWebApi = require('spotify-web-api-node');
const { URLSearchParams } = require('url');
var spotifyApi = new SpotifyWebApi({
    clientId: '5d41a60ef3b04d87bafe4f28b56ee81a',
    clientSecret: '29972a14b1934a21b8c1a72cb7bcfbce',
    redirectUri: 'http://localhost:4002/callback'
  });
// spotifyApi.setAccessToken('BQC3nrhlYYXlvdO5eCt4_FHJ2wTdqMB4_zLF1g9G6wPetw0tPifE486aGP_5XLTYgYHWqTj1lYC1WmfrOV0NdJ_0Xz57m7k9VyKvGiNTIGnpP2KIhKXDW0mJF0auczHxSqScxSFWwCkLSpaVuOzU2aLUZ3Uz3kI');



const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

   
var client_id = '5d41a60ef3b04d87bafe4f28b56ee81a';
var redirect_uri = 'http://localhost:4002/blogposts';
var client_secret = '29972a14b1934a21b8c1a72cb7bcfbce'



app.get('/login', function(req, res) {

  const state = 'kyDTOy01P6DrJBT7';
  const scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

// const origWarning = process.emitWarning;
// process.emitWarning = function(...args) {
//     if (args[2] !== 'DEP0005') {
//         // pass any other warnings through normally
//         return origWarning.apply(process, args);
//     } else {
//         'do nothing, eat the warning';
//     }
// }

// app.get('/callback', function(req, res) {

//     var code = req.query.code || null;
//     var state = req.query.state || null;
  
//     if (state === null) {
//       res.redirect('/#' +
//         querystring.stringify({
//           error: 'state_mismatch'
//         }));
//     } else {
//       var authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         form: {
//           code: code,
//           redirect_uri: redirect_uri,
//           grant_type: 'authorization_code'
//         },
//         headers: {
//           'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//         },
//         json: true
//       };
//     }
//   });

// 

// let redirect_uri = 
//   process.env.REDIRECT_URI || 
//   'http://localhost:4002/callback'
// const params = new URLSearchParams
// app.get('/login', function(req, res) {
//   res.redirect('https://accounts.spotify.com/authorize?' +
//   querystring.stringify({
//       response_type: 'code',
//       client_id: '93026130e7544126ab0f707b7371f5f1',
//       scope: 'user-read-private user-read-email',
//       redirect_uri
// }))})


// client_id = '93026130e7544126ab0f707b7371f5f1',
// client_secret = 'd41e40d2c56748289fc2474ca08f5b26'

// app.get('/callback', function(req, res) {
//   let code = req.query.code || null
//   let authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (  Buffer.from()(
//         client_id + ':' + client_secret
//       ).toString('base64'))
//     },
//     json: true
//   }
//   request.post(authOptions, function(error, response, body) {
//     var access_token = body.access_token
//     let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
//     res.redirect(uri + '?access_token=' + access_token)
//   })
// })

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

// create the get request
app.get('/blogposts', cors(), async (req, res) => {
   
    try{
        const { rows: genres } = await db.query('SELECT * FROM genres');
        res.send(genres);
    } catch (e){
        return res.status(400).json({e});
    }
});

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

app.get('/albums', async (req, res) => {
    const artistResponse = await spotifyApi.searchArtists('Kanye')
    // res.send(artistResponse)
    const artistResponseData =   await artistResponse.body.artists.items[0]   // res.send(artistResponseData)
    const artistResponseDataId = await artistResponseData.id
    const albumsResponse = await spotifyApi.getArtistAlbums(artistResponseDataId)
    // const albumsResponseData = albumsResponse.body
    res.send(albumsResponse.body.items[4]['name'])
    console.log('albums response'  + albumsResponse.body[0])
   
})



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



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});