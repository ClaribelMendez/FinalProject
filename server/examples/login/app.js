const request = require("request");
const fetch = require('node-fetch');
var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  consolidate = require('consolidate');
  var nunjucks = require('nunjucks');




require('dotenv').config();

var port = 4002;
var authCallbackPath = '/auth/spotify/callback';

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, expires_in
//   and spotify profile), and invoke a callback with a user object.
passport.use(
  new SpotifyStrategy(
    {
      clientID: '5d41a60ef3b04d87bafe4f28b56ee81a',
      clientSecret: '29972a14b1934a21b8c1a72cb7bcfbce',
      callbackURL: 'http://localhost:' + port + authCallbackPath,
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        console.log('Access Token: ' + accessToken)
        console.log('Refresh Token ' + refreshToken)
        return done(null, profile);
      });
    }
  )
);
var app = express();

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true})
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

app.engine('html', consolidate.nunjucks);

app.get('/', function (req, res) {
  res.render('index.html', {user: req.user});
});

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account.html', {user: req.user});
});

app.get('/login', function (req, res) {
  res.render('login.html', {user: req.user});
});

// GET /auth/spotify
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in spotify authentication will involve redirecting
//   the user to spotify.com. After authorization, spotify will redirect the user
//   back to this application at /auth/spotify/callback
app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'playlist-modify-public', 'user-follow-read'],
    showDialog: true,
  })
);

// GET /auth/spotify/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  authCallbackPath,
  passport.authenticate('spotify', {failureRedirect: '/login'}),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
  console.log('redirect')
});

app.listen(port, function () {
  console.log('App is listening on port ' + port);
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

let artistid;


app.get('/game', async  (req, res) => {
  // genre = req.query.genre;
  // console.log("backend line 315. Genre: " + genre);
  fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + 'BQBuc_sEnkDawrn9gQjqQLyim8H8ZjcunOA_B0kZBcFQb2q004tQN0xJ1UtjGKHwh_w2uiorh8gZQfWBJj9cZ321n-uRaCOKB9-57dVwhwDxBPsff0d_ybr_kMVs0Wl-5r9KN_iuWpJ2N_p_5M6RBWaJWdKT4htNq0hJHEllSWPE4uCnQbPVrzm9qQLvvoaVdA',
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
              Authorization: "Bearer " + 'BQBuc_sEnkDawrn9gQjqQLyim8H8ZjcunOA_B0kZBcFQb2q004tQN0xJ1UtjGKHwh_w2uiorh8gZQfWBJj9cZ321n-uRaCOKB9-57dVwhwDxBPsff0d_ybr_kMVs0Wl-5r9KN_iuWpJ2N_p_5M6RBWaJWdKT4htNq0hJHEllSWPE4uCnQbPVrzm9qQLvvoaVdA',
            },
          }
        ).then((response) => {
          console.log(
            response.json().then((data) => {
              console.log(data);
              res.json(data);
              {
                console.log(data.tracks[0]["album"]["images"][0]["url"]);
              }
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

