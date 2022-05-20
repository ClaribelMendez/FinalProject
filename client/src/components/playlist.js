// import { request } from 'express'
// import { useState, useEffect } from 'react'
// import { accessToken } from './spotify'

// function Playlist(props){

//     let genre = props.genre
//     let id = props.id
//     console.log(id)
//     fetch(
//         `https://api.spotify.com/v1/search?q=${genre}&type=playlist`,
    
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + accessToken,
//           },
//         }
//       ).then((response) => {
//         console.log(
//           response.json().then((data) => {
//               console.log(data)
           
//           })
//         );
//       });

      
//     //   let data = '--data'
//     //   let requestBody = "{\"name\":\"Project\",\"description\":\"New playlist description\",\"public\":false}"
//     //   const getPlaylist = (newPlaylist) => {
//     //   fetch(
//     //     `https://api.spotify.com/v1/${id}//playlists${data}${requestBody}`,{
//     //             method: 'POST',
//     //             headers: {
//     //               'Accept': 'application/json',
//     //               'Content-Type': 'application/json',
//     //               Authorization: "Bearer " + accessToken,
//     //             },
//     //             body: JSON.stringify({requestBody})
//     //         }).then(response => response.json()
//     //         ).then(data => {
//     //           const playlistId = data.id;
//     //           console.log(data); // not getting playlist id!
           
          
//     //         });
//     //   }
       
    

//         return (
//         <div>
//            {/* <button onClick={getPlaylist}>Add Playlist</button>
//             {} */}
//         </div>
//     )
// }
// export default Playlist

