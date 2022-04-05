const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 
const path = require('path');


const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/form', cors(), async (req, res) => {
   
    try{
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/form', cors(), async (req, res) => {
    const newPost = { date: req.body.date, title: req.body.title, content: req.body.content }
    console.log([newPost.date, newPost.title, newPost.content]);
    const result = await db.query(
        'INSERT INTO posts(date, title, content) VALUES($1, $2, $3) RETURNING *',
        [newPost.date, newPost.title, newPost.content]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

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