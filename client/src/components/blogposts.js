
   
import { useState, useEffect } from "react";
import Form from "./form";

function BlogPosts() {

    const [posts, setPosts] = useState([]);

    const [editingPostId, setEditingPostId] = useState(null);

    const [genre, setGenre] = useState();

    const loadPosts = () => {
        fetch("http://localhost:4002/blogposts")
            .then((response) => response.json())
            .then(posts => {
                setPosts(posts);
            })
    }

    const loadGenre = () => {
        fetch("http://localhost:4002/form")
            .then((response) => response.json())
            .then(genre => {
                setGenre(genre);
            })
    }

    


    // Use effect hook to render the students in the app. This will change any time that our initial state change
    useEffect(() => {
        loadPosts()
        loadGenre()
    }, []);

    const onDelete = (post) => {
        return fetch(`http://localhost:4002/blogposts/${post.id}`, {
            method: "DELETE"
        }).then((response) =>{
            //console.log(response);
            if(response.ok){
                loadPosts();
            }
        })
    }

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

  let handleGenreSelection = (e) => {
    setGenre(e.target.value)
    alert('hi')
  }


    return (
      <div className="cards" >
          <h2>{genre}</h2>
        
                {/* {posts.map((post) => {
                    if(post.id === editingPostId){
                        return <Form initialPost={post} savedPost={updatePost} />
                    } else {
                        return (
                        <button key={post.id} className='card'>  {post.name} 
                        
                        <button type="button" onClick={() =>{onDelete(post)}}>Delete</button> 
                        <button type="button" onClick={() => {onEdit(post)}}>Edit</button></button>
                        );
                    }}
                    )} */}

<select onChange={handleGenreSelection}> 
      <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {posts.map((post) => <option key={post.id} value={post.value}>{post.genre}</option>)}
    </select> 
            {/* <Form savePost={addPost} /> */}
        </div>
    );
}
                // <button key={post.id}> <img src= {post.image} alt = '{post.alt}' style={{width: "100%"}}/>  <div className='container' >{post.title} <div className='card-footer'>{post.date}</div>{post.content}</div> 
                // </button> )}
      // </div>
    // );
  // }
  
  export default BlogPosts;

  
