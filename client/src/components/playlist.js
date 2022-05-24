import { useState, useEffect } from 'react'
import { accessToken } from './spotify'

function Playlist(props){
    const [id, setId] = useState('')
    const [playlistId, setPlaylistId] = useState('')
    
    let fav1 = props.fav1
    let fav2 = props.fav2
    let fav3 = props.fav3

    

  

    fetch(
      "https://api.spotify.com/v1/me",
  
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
          setId(data["id"]);
          console.log('from playlist ', id);
        })
      );
    });
      
      
      
      const getPlaylist = (e) => {
      fetch(
        `https://api.spotify.com/v1/users/${id}/playlists`,{
                
        method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + accessToken,
                },
                body: JSON.stringify({  "name": "afro-house",
                "description": "New playlist description",
                "public": false})
            }).then(response => response.json()
            ).then(data => {
                    console.log(data.id)
                    setPlaylistId(data.id)
                    console.log(playlistId)
          })
      
            fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks` ,{
                      
              method: 'POST',
              
                      headers: {
                       
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + accessToken,
                        
                      },
                      body: JSON.stringify({ "uris": [`spotify:track:${fav1}`,`spotify:track:${fav2}`]
                      })
                  }).then(response => response.json()
                  ).then(data => {
                          console.log('line 70 ', data)
                   
                  
                });
              }

        return (
        <div className='playlists'>
        
    
           <button className='addplaylist' onClick={getPlaylist}>Add Playlist</button>

        </div>
    )
}
export default Playlist

