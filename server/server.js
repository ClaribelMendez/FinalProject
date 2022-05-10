const express = require('express')
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
const port = 4003

app.use(cors()) // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

const credentials = {
  clientId: 'cb79505b7a4e48258da5fc9f2d1672c2',
  clientSecret: '2b6b049411844eed80b871d782262f9c',
  redirectUri: 'http://localhost:3000',
};

// app.get("/", (req, res) => {
//   res.json({ message: "Hello from My ExpressJS" });
// });

// app.get("/genres", async (req, res) => {
//   try{
//       const { rows: genres } = await db.query('SELECT * FROM genres');
//       res.json(genres);
//   } catch (e){
//       return res.status(400).json({e});
//   }
// });




app.post('/login', (req,res) => {
//  setup 
    let spotifyApi = new spotifyWebApi(credentials)

//  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
    const code = req.body.code

    // Retrieve an access token
    spotifyApi.authorizationCodeGrant(code).then((data) => {

        // Returning the User's AccessToken in the json formate  
        res.json({
            accessToken : data.body.access_token
        }) 
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400)
    })
   


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
