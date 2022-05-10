const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
// const encodeFormData = require("../helperFunctions/encodeFormData.js");
const querystring = require("querystring");

//user logs in
router.get("/login", async (req, res) => {
    let scope = "user-read-private user-read-email playlist-modify-public"
    res.redirect(`https://accounts.spotify.com/authorize?client_id=cb79505b7a4e48258da5fc9f2d1672c2&response_type=code&redirect_uri=http://localhost:3000&scope=${scope}&show_dialog=true`)
})

module.exports = router