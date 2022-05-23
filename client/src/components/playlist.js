// import { useState, useEffect } from 'react'
// import { accessToken } from './spotify'

// function Playlist(props){
//     const [id, setId] = useState('')

//     let genre = props.genre

//     // let userId = props.id

//     console.log(id)


      
//       let userId = '31txpvgy5fjbhotkhdwpwu6mv63e'  
      
//       const getPlaylist = (e) => {
//       fetch(
//         "https://api.spotify.com/v1/users/31txpvgy5fjbhotkhdwpwu6mv63e/playlists" ,{
                
//         method: 'POST',
//                 headers: {
//                   Accept: 'application/json',
//                   'Content-Type': 'application/json',
//                   Authorization: "Bearer " + accessToken,
//                 },
//                 body: JSON.stringify({  "name": "Jazz",
//                 "description": "New playlist description",
//                 "public": false})
//             }).then(response => response.json()
//             ).then(data => {
//                     console.log(data.id)
//                     setId(data.id)
//                     console.log(id)
//           })
//       }
//             fetch(
//               `https://api.spotify.com/v1/playlists/${id}/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M` ,{
                      
//               method: 'POST',
//                       headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                         Authorization: "Bearer " + accessToken,
//                       },
//                       body: JSON.stringify({ })
//                   }).then(response => response.json()
//                   ).then(data => {
//                           console.log(data.id)
                   
                  
//                 });

//         return (
//         <div className='playlists'>
//             <div div className='playlistinfo'>
//             Here are the tracks that will be added to the playlist. You can modify this playlist on Spotify.
//                 <br></br>
//                 <br></br>

//             Artist: Jazzyfatnastees
//             <br></br>
//             <br></br>

//             Tracks: 
//             <br></br>
//             Unconventional Ways
//             <br></br>

// Hear Me
// <br></br>

// The Wound   å
// <hr></hr>
// Artist: Aretha Franklin
//             <br></br>
//             <br></br>

//             Tracks: 
//             <br></br>
//             I Say a Little Prayer
//             <br></br>

// Respect
// <br></br>

// (You Make Me Feel Like) A Natural Woman 
// <hr></hr>
// Artist: Cafe Jazz Deluxe
//             <br></br>
//             <br></br>

//             Tracks: 
//             <br></br>
//             Cafe Jazz Ambience
//             <br></br>

//             Music for Double Espresso Lovers
// <br></br>

// Train
// <hr></hr>
// Artist: Etta James
//             <br></br>
//             <br></br>

//             Tracks: 
//             <br></br>
//             At last
//             <br></br>

//             I'd Rather Go Blind
// <br></br>

// A Sunday Kind Of Love
// <hr></hr>
// Artist: JazzyCal
//             <br></br>
//             <br></br>

//             Tracks: 
//             <br></br>
//             Horizon
//             <br></br>

//            Spring Flower
// <br></br>

// Watercolor
// <hr></hr>

// </div>
//            <button className='addplaylist' onClick={getPlaylist}>Add Playlist</button>

//         </div>
//     )
// }
// export default Playlist

