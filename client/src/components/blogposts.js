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
      <div className="cards" >
        
            {posts.map(post =>
                <button key={post.id}> <img src= {post.image} alt = '{post.altText}' style={{width: "100%"}}/>  <div className='container' >{post.title} <div className='card-footer'>{post.date}</div>{post.content}</div> 
                </button> )}
      </div>
    );
  }
  
  export default BlogPosts;

  