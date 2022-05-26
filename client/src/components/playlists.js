import React from 'react'
import { useState, useEffect } from 'react'
import { accessToken } from './spotify'

const Playlists = (props) => {
  const genre = props.genre
console.log(genre)
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [name3, setName3] = useState('')
  const [url1, setUrl1] = useState('')
  const [url2, setUrl2] = useState('')
  const [url3, setUrl3] = useState('')
  
  

    // const getPlaylists = () => {
    fetch(
      '/playlists',
  
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    ).then((response) => {
      console.log(
        response.json().then((data) => {
          console.log(data.playlists)
          setName1(data.playlists.items[0]['name'])
          setName2(data.playlists.items[1]['name'])
          setName3(data.playlists.items[2]['name'])
          setImage1(data.playlists.items[0]['images'][0]['url'])
          setImage2(data.playlists.items[1]['images'][0]['url'])
          setImage3(data.playlists.items[2]['images'][0]['url'])
          setUrl1(data.playlists.items[0]['external_urls']['spotify'])
          setUrl2(data.playlists.items[1]['external_urls']['spotify'])
          setUrl3(data.playlists.items[2]['external_urls']['spotify'])


        })
      );
    });
  


    // useEffect(() => { 
    //   getPlaylists();
    //  }, []);
  
   
      return (
    <div className='playlists'>
         <div className='playlist_info'>
      <h2>Playlists</h2>
      Click on the name of the playlist to check these out on Spotify! 
      <br></br>
      <br></br>
      <br></br>

   
      <img
                      src={image1}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ={url1}>{name1}</a>
                    <br></br>

                     <br></br>
      <br></br>
                     <img
                      src={image2}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ={url2}>{name2}</a>
                    <br></br>

                     <br></br>
      <br></br>
                     <img
                      src={image3}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ={url3}>{name3}</a>
                    <br></br>

                     </div>        
                     <div className='border'></div>
    </div>
  )
}

export default Playlists
