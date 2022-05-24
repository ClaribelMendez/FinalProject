import { useState, useEffect } from 'react'
import { accessToken } from './spotify'

function Playlist(props){
    const [id, setId] = useState('')
    const [favorites, setFavorites] = useState([])
    let userId = props.id
    let fav1 = props.fav1
    let fav2 = props.fav2
    let fav3 = props.fav3

    

  


      
      
      
      const getPlaylist = (e) => {
      fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,{
                
        method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + accessToken,
                },
                body: JSON.stringify({  "name": "Jazz",
                "description": "New playlist description",
                "public": false})
            }).then(response => response.json()
            ).then(data => {
                    console.log(data.id)
                    setId(data.id)
                    console.log(id)
          })
      }
            fetch(
              `https://api.spotify.com/v1/playlists/${id}/tracks?uris=spotify%3Atrack${fav1}%2Cspotify%3Atrack%${fav2}%2Cspotify%3Atrack%${fav3}` ,{
                      
              method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + accessToken,
                      },
                      body: JSON.stringify({ })
                  }).then(response => response.json()
                  ).then(data => {
                          console.log(data.id)
                   
                  
                });

        return (
        <div className='playlists'>
        
    
           <button className='addplaylist' onClick={getPlaylist}>Add Playlist</button>

        </div>
    )
}
export default Playlist

