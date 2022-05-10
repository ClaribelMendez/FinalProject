const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const encodeFormData = require("../helperFunctions/encodeFormData.js");
const querystring = require("querystring");

//user logs in
router.get("/login", async (req, res) => {
    let scope = "user-read-private user-read-email playlist-modify-public"
    res.redirect(`https://accounts.spotify.com/authorize?client_id=cb79505b7a4e48258da5fc9f2d1672c2&response_type=code&redirect_uri=http://localhost:3000&scope=${scope}&show_dialog=true`)
})

//user accepts or denies the login
router.get("/logged", async (req,res) => {
    //body to be URLEncoded
    let body = {
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: "http://localhost:3000",
        client_id: "cb79505b7a4e48258da5fc9f2d1672c2",
        client_secret: "2b6b049411844eed80b871d782262f9c"
    }
    //fetch for access and refresh token for the user
    await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        body: encodeFormData(body)
    })
    .then(resp => resp.json())
    .then(data => {
        let query = querystring.stringify(data);
        res.redirect(`http://localhost:3000/${query}`)
    });
})

//gives access token for user data
router.get("/getUser:token", async(req,res) => {
    await fetch("https://api.spotify.com/v1/me",{
        headers: {
            "Authorization": `Bearer ${req.params.token}`
        }
    })
.then(response => response.json())
.then(data => {
    userID = data.id;
    res.json(data);
    console.log(data)
});
})



module.exports = router