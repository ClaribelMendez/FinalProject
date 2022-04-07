import { useState, useEffect } from "react";
import Form from "./form";

function BlogPosts() {

    const [posts, setPosts] = useState([]);

    const [editingPostId, setEditingPostId] = useState(null);


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
    
    const updatePost = (savedPost) =>{
      setPosts((posts) => {
          const newPosts = [];
          for(let post of posts){
              if(post.id === savedPost.id){
                  newPosts.push(savedPost);
              } else{
                  newPosts.push(post);
              }
          }
          return newPosts;
      })

      // This line is just to close the form! 
      setEditingPostId(null);

  }

  //A function to grab the student.id of the student that we want to edit
  const onEdit = (post) =>{
      const editingId = post.id;
      setEditingPostId(editingId);

  }


    return (
      <div className="cards" >
        
        <ul>
                {posts.map((post) => {
                    if(post.id === editingPostId){
                        return <Form initialPost={post} savedPost={updatePost} />
                    } else {
                        return (
                        <li key={post.id}> {post.title} {post.content} {post.date} <img src= {post.image} 
                        alt = '{post.alt}' style={{width: "100%"}}/>
                        {/* <button type="button" onClick={() =>{onDelete(post)}}>X</button>  */}
                        <button type="button" onClick={() => {onEdit(post)}}>Edit</button></li>
                        );
                    }}
                    )}
            </ul>
            <Form savePost={addPost} />
        </div>
    );
}
                // <button key={post.id}> <img src= {post.image} alt = '{post.alt}' style={{width: "100%"}}/>  <div className='container' >{post.title} <div className='card-footer'>{post.date}</div>{post.content}</div> 
                // </button> )}
      // </div>
    // );
  // }
  
  export default BlogPosts;

  