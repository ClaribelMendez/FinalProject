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
app.get('/api/blogposts', cors(), async (req, res) => {
   
    try{
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e){
        return res.status(400).json({e});
    }
});

app.delete('/api/blogposts/:id', cors(), async (req, res) =>{
    const postId = req.params.id;
    //console.log(req.params);
    await db.query('DELETE FROM posts WHERE id=$1', [postId]);
    res.status(200).end();

});

//create the POST request
app.post('/api/blogposts', cors(), async (req, res) => {
    const newPost = { date: req.body.date, title: req.body.title, content: req.body.content,image: req.body.image, alt: req.body.alt  }
    console.log([newPost.date, newPost.title, newPost.content, newPost.image, newPost.alt]);
    const result = await db.query(
        'INSERT INTO posts(date, title, content, image, alt) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [newPost.date, newPost.title, newPost.content,  newPost.image, newPost.alt]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

app.put('/api/blogposts/:postId', cors(), async (req, res) =>{
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