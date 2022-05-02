
   
import { useState, useEffect } from "react";
// import Form from "./form";
import Modalpopup from "./modal";

function BlogPosts() {

    const [posts, setPosts] = useState([]);

    const [editingPostId, setEditingPostId] = useState(null);

    const [genre, setGenre] = useState([]);
    const [currentArtist, setCurrentArtist] = useState();
    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState([])
    const [score, setScore] = useState(0);
 
    let subgenres =
   [
    
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1on7ZQ2pvgeQF4vmIA09x5"
            },
            "followers": {
              "href": null,
              "total": 5479001
            },
            "genres": [
              "brazilian rock",
              "hard rock brasileiro",
              "rock alternativo brasileiro",
              "rock nacional brasileiro"
            ],
            "href": "https://api.spotify.com/v1/artists/1on7ZQ2pvgeQF4vmIA09x5",
            "id": "1on7ZQ2pvgeQF4vmIA09x5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebc409f8e59d6abb96f1b9e06f",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174c409f8e59d6abb96f1b9e06f",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178c409f8e59d6abb96f1b9e06f",
                "width": 160
              }
            ],
            "name": "Charlie Brown Jr.",
            "popularity": 76,
            "type": "artist",
            "uri": "spotify:artist:1on7ZQ2pvgeQF4vmIA09x5"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
            },
            "followers": {
              "href": null,
              "total": 39721957
            },
            "genres": [
              "modern rock",
              "rock"
            ],
            "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
            "id": "53XhwfbYqKCa1cC15pYq2q",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174920dc1f617550de8388f368e",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178920dc1f617550de8388f368e",
                "width": 160
              }
            ],
            "name": "Imagine Dragons",
            "popularity": 93,
            "type": "artist",
            "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
            },
            "followers": {
              "href": null,
              "total": 36154581
            },
            "genres": [
              "pop",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
            "id": "04gDigrS5kc9YWfZHwBETP",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb288ac05481cedc5bddb5b11b",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174288ac05481cedc5bddb5b11b",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178288ac05481cedc5bddb5b11b",
                "width": 160
              }
            ],
            "name": "Maroon 5",
            "popularity": 90,
            "type": "artist",
            "uri": "spotify:artist:04gDigrS5kc9YWfZHwBETP"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6tw6EpC9RgmSRZiZg0n22t"
            },
            "followers": {
              "href": null,
              "total": 5006817
            },
            "genres": [
              "brazilian rock",
              "mpb",
              "rock brasiliense",
              "rock nacional brasileiro"
            ],
            "href": "https://api.spotify.com/v1/artists/6tw6EpC9RgmSRZiZg0n22t",
            "id": "6tw6EpC9RgmSRZiZg0n22t",
            "images": [
              {
                "height": 1000,
                "url": "https://i.scdn.co/image/cd410bc7c6e3591f65d9c9ee9516d2e96acfed42",
                "width": 1000
              },
              {
                "height": 640,
                "url": "https://i.scdn.co/image/d0a544a5f9e0a548536b9bc0449e50137e0dd08c",
                "width": 640
              },
              {
                "height": 200,
                "url": "https://i.scdn.co/image/3ec7aa085b47711065443477cbd83aa39a056f13",
                "width": 200
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/183df4c68c2028e4a59abc49c8e659429086f254",
                "width": 64
              }
            ],
            "name": "Legião Urbana",
            "popularity": 71,
            "type": "artist",
            "uri": "spotify:artist:6tw6EpC9RgmSRZiZg0n22t"
                    }]




    
        


    



    const loadPosts = () => {
        fetch("http://localhost:4002/blogposts")
            .then((response) => response.json())
            .then(posts => {
                setPosts(posts);
            })
    }



    // const loadGenre = () => {
    //     fetch("http://localhost:4002/form")
    //         .then((response) => response.json())
    //         .then(genre => {
    //             setGenre(genre);
    //         })
    // }

    


    // Use effect hook to render the students in the app. This will change any time that our initial state change
    useEffect(() => {
        loadPosts()
        // loadGenre()
    }, []);
// 
    // const onDelete = (post) => {
    //     return fetch(`http://localhost:4002/blogposts/${items}`, {
    //         method: "POST"
    //     }).then((response) =>{
    //         //console.log(response);
    //         if(response.ok){
    //             loadPosts();
    //         }
    //     })
    // }

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
  }


  let handleArtistChosen = () => {
    let arrayOfNums =[]
    for (let i = 0; i < subgenres.length; i++){
    arrayOfNums.push(i)
    }
    console.log(arrayOfNums)
    let randomNumber = (Math.floor(Math.random() * arrayOfNums.length));
    console.log(randomNumber)
    setIndex(randomNumber)
    let randomArtist = subgenres[randomNumber]['name']
    setCurrentArtist(randomArtist)
    console.log('this is the artist' + randomArtist)

    // arrayOfNums = arrayOfNums.splice(randomNumber)

  }

  let handleAnswer = (e) => {
    setAnswer(e.target.value)
    console.log(e.target.value)
   console.log(subgenres[index]['genres'])
    console.log(currentArtist)
    if(subgenres[index]['genres'] == e.target.value){
      console.log('correct')
      setScore(score + 1)
    }else{
      console.log('incorrect')
      setScore(score - 1)
    }
    }
  


  
  






    return (
      <div className="cards" >
   <h2>{genre}</h2>
   <div>{currentArtist}</div>
   <h2>{score}</h2>
   <h2>{answer}</h2>



   <button type="button" onClick={() =>{handleArtistChosen({subgenres})}}>click me to choose artist</button> 

      

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
                  {subgenres.map((item,index) => <button type='radio' key={item.index} value={item.genres} onClick={handleAnswer}>
                  {'\n' + item.genres}
                  </button>
                
        
                  )}


                  <select onChange={handleGenreSelection}> 
      <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
      {posts.map((post) => <option key={post.id} value={post.value}>{post.genre}</option>)}
    </select> 
  
          
            
        </div>
    )}
                  
  
  export default BlogPosts;

  
