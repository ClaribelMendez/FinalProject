import { useState, useEffect } from "react";
import Form from "./form";

function BlogPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/blogposts")
        .then((response) => response.json())
        .then(post =>{
       setPosts(post)     
        })
        
    }, []);

    

    const addPost = (newPost) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setPosts((posts) => [...posts, newPost]);
    }


    return (
      <div className="blogposts">
        <ul>
            {posts.map(post =>
                <li key={post.id}> {post.date} {post.title} {post.content}</li>)}
        </ul>
        <Form addPost={addPost} />
      </div>
    );
  }
  
  export default BlogPosts;