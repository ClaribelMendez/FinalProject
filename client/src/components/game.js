import { useState, useEffect } from "react";
import React from 'react'
import Sound from './sound'

function Game() {



    const [editingPostId, setEditingPostId] = useState(null);

    const [genre, setGenre] = useState([]);
    const [currentGenre, setCurrentGenre] = useState('')
    const [currentArtist, setCurrentArtist] = useState();
    const [index, setIndex] = useState(0)
    const [trackIndex, setTrackIndex] = ([0])
    const [answer, setAnswer] = useState([])
    const [score, setScore] = useState(0);
    const [track, setTrack] = useState([])
 
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




    
        

                    
    



 

    // let access_token = 'BQAKazbbvf7DFYKXTts2n3YW2Rt4u5CWGf7bRP5yXNHDbmXLCalh_87h3mNJfOADW18H79jgiIrM7ZUl4difjwpEjyiQYbyxglFK2qDbVOx25ULLNMjbPaV2UbUypnfv1rRVpS7Jbqta97AzBjcFL8ZLF_IYz93iN4ms99Xkz5S_kcosbvtL-1Ss4zDLUEq4xA'
    // let artistid;
    // const loadtrack = () => {
      
    //   fetch('https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj', {
    //     method: 'GET', headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + access_token
    //     }
    // })
    //     .then((response) => {
    //         response.json().then(
    //             (data) => {
    //                 // res.json(data)
    //                 artistid = data.id
    //                 console.log(artistid)
    //                 return fetch(`https://api.spotify.com/v1/artists/${artistid}/top-tracks?market=ES`, {
    //                     method: 'GET', headers: {
    //                         'Accept': 'application/json',
    //                         'Content-Type': 'application/json',
    //                         'Authorization': 'Bearer ' + access_token
    //                     }
    //                 })
    //                     .then((response) => {
    //                        response.json().then(
    //                             (data) => {
    //                              response.json(data.tracks)
    //                              let preview = [data.tracks[0].name, data.tracks[1].name, data.tracks[2].name]
    //                                 // console.log(data.tracks[0]['preview_url'])
    //                                 setTrack(preview)
    //                             }
    //                         );
    //                     });
    //             }
    //     )})}



    // Use effect hook to render the students in the app. This will change any time that our initial state change
    // useEffect(() => {
    //     loadtrack()
    // }, [] );

    // const onDelete = (post) => {
    //     return fetch(`http://localhost:4002/bloggenres/${items}`, {
    //         method: "POST"
    //     }).then((response) =>{
    //         //console.log(response);
    //         if(response.ok){
    //             loadgenres();
    //         }
    //     })
    // }

    
    






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
    const trackindex = trackIndex + 1
    setTrackIndex(trackindex)

    
    if(subgenres[index]['genres'] == e.target.value){
      console.log('correct')
      setScore(score + 1)
    }else{
      console.log('incorrect')
      setScore(score - 1)
    }
    }
  

    return (
      <div className="genres"  >
   <h2>{genre}</h2>
   <div>{currentArtist}</div>
   <h2>{score}</h2>
   {/* <h2>{answer}</h2> */}
   {/* <h2>song title: {track[trackIndex]}</h2> */}

  <Sound preview = {track}/>




   <button type="button" onClick={() =>{handleArtistChosen({subgenres})}}>click me to choose artist</button> 

      

                {/* {genres.map((post) => {
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


  

          
            
        </div>
    )}
                  
  
  export default Game;

  